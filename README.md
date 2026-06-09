# ERP Titans Website

A modern corporate website for ERP Titans built with Next.js, TypeScript, and Tailwind CSS.

## Features

* Responsive design
* Industry-specific ERP solution pages
* Contact inquiry system
* ERP Health Audit booking workflow
* Resend email integration
* SEO optimization (Sitemap, Robots, Open Graph)
* Privacy Policy and Terms pages

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Resend

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Production Notes

For production email delivery:

1. Verify your domain in Resend.
2. Update the admin recipient email.
3. Configure the production `RESEND_API_KEY`.
4. Redeploy the application.

See `HANDOVER.md` for detailed deployment instructions.

## License

Private project developed for ERP Titans.
