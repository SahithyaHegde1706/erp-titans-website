import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://erp-titans.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ERP Titans | ERP Recovery Specialists",
    template: "%s | ERP Titans",
  },
  description: "We help SMEs recover from failed ERP implementations and unlock true potential through expert diagnostics and precision fixing.",
  openGraph: {
    title: "ERP Titans | ERP Recovery Specialists",
    description: "We help SMEs recover from failed ERP implementations and unlock true potential through expert diagnostics and precision fixing.",
    url: baseUrl,
    siteName: 'ERP Titans',
    images: [
      {
        url: '/images/logo.png', // Fallback, normally you'd use a dedicated OG 1200x630 image here
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ERP Titans | ERP Recovery Specialists",
    description: "We help SMEs recover from failed ERP implementations and unlock true potential through expert diagnostics and precision fixing.",
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
