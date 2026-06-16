type JwtClaims = {
  aud?: string;
  roles?: string[];
  appid?: string;
  tid?: string;
};

async function readResponseBody(response: Response): Promise<string> {
  const text = await response.text();
  return text || '(empty body)';
}

function decodeJwtClaims(token: string): JwtClaims {
  const payload = token.split('.')[1];

  if (!payload) {
    return {};
  }

  const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
  const decoded = Buffer.from(padded, 'base64').toString('utf8');

  try {
    const claims = JSON.parse(decoded) as JwtClaims;
    return {
      aud: claims.aud,
      roles: claims.roles,
      appid: claims.appid,
      tid: claims.tid,
    };
  } catch {
    return {};
  }
}

async function logGraphResponse(label: string, response: Response): Promise<string> {
  const body = await readResponseBody(response);
  console.log(`--> [Graph API] ${label} status: ${response.status}`);
  console.log(`--> [Graph API] ${label} body: ${body}`);
  return body;
}

async function graphRequest(
  label: string,
  url: string,
  accessToken: string,
  init?: RequestInit
): Promise<Response> {
  console.log(`--> [Graph API] ${label} endpoint: ${url}`);
  if (init?.body) {
    console.log(`--> [Graph API] ${label} request body: ${typeof init.body === 'string' ? init.body : String(init.body)}`);
  }

  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...(init?.headers || {}),
    },
  });
}

export async function getGraphAccessToken(): Promise<string> {
  console.log("--> [Graph API] Starting getGraphAccessToken()");
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret || tenantId.includes('your-') || clientId.includes('your-')) {
    console.error("--> [Graph API] Environment variables are missing or using placeholder values!");
    throw new Error('Missing or placeholder Microsoft Graph API environment variables.');
  }

  const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  console.log(`--> [Graph API] Requesting token from URL: ${url}`);
  
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('scope', 'https://graph.microsoft.com/.default');
  params.append('client_secret', clientSecret);
  params.append('grant_type', 'client_credentials');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`--> [Graph API] Token generation failed. Status: ${response.status}`, errorText);
    throw new Error(`Failed to get Graph API access token: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  console.log("--> [Graph API] Access token generated successfully.");
  console.log("--> [Graph API] Decoded token claims:", decodeJwtClaims(data.access_token));
  return data.access_token;
}

export async function createTeamsMeeting(subject: string, startDateTime: string, endDateTime: string): Promise<string> {
  console.log("--> [Graph API] Starting createTeamsMeeting()");
  const organizerEmail = process.env.TEAMS_ORGANIZER_EMAIL;
  const organizerObjectId = process.env.TEAMS_ORGANIZER_OBJECT_ID;
  
  if (!organizerEmail && !organizerObjectId) {
    console.error("--> [Graph API] Missing TEAMS_ORGANIZER_EMAIL or TEAMS_ORGANIZER_OBJECT_ID environment variable.");
    throw new Error('Missing TEAMS_ORGANIZER_EMAIL or TEAMS_ORGANIZER_OBJECT_ID environment variable.');
  }

  const accessToken = await getGraphAccessToken();

  const tokenClaims = decodeJwtClaims(accessToken);
  console.log("--> [Graph API] Decoded token claims used for meeting creation:", tokenClaims);

  // Prefer Object ID if available, to bypass the need for User.Read.All permission
  const endpointUserId = organizerObjectId || encodeURIComponent(organizerEmail as string);
  const meetingUrl = `https://graph.microsoft.com/v1.0/users/${endpointUserId}/onlineMeetings`;
  const requestBody = {
    startDateTime,
    endDateTime,
    subject,
  };

  console.log("--> [Graph API] Meeting request endpoint:", meetingUrl);
  console.log("--> [Graph API] Meeting request body:", JSON.stringify(requestBody));

  const response = await graphRequest('POST onlineMeetings', meetingUrl, accessToken, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  const responseBody = await logGraphResponse('POST onlineMeetings', response);

  if (!response.ok) {
    console.error(`--> [Graph API] Meeting creation failed. Status: ${response.status}`, responseBody);
    throw new Error(`Failed to create Teams meeting: ${response.status} ${responseBody}`);
  }

  const data = JSON.parse(responseBody);
  console.log("--> [Graph API] Meeting created successfully. joinWebUrl retrieved.");
  return data.joinWebUrl;
}
