import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/app/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://clearviewmarketing.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Clearview – Smart Marketing Solutions That Drive Growth",
    template: "%s | Clearview Marketing",
  },

  description:
    "Clearview helps brands tell powerful stories and create meaningful connections. Strategic marketing, thoughtful design, and innovative digital campaigns that boost visibility, elevate engagement, and drive measurable results.",

  keywords: [
    "marketing agency",
    "digital marketing",
    "brand strategy",
    "lead generation",
    "content marketing",
    "social media marketing",
    "SEO services",
    "email marketing",
    "creative agency",
    "data-driven marketing",
    "Clearview",
    "clearview marketing",
  ],

  authors: [{ name: "Clearview", url: SITE_URL }],
  creator: "Clearview",
  publisher: "Clearview",

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Clearview Marketing",
    title: "Clearview – Smart Marketing Solutions That Drive Growth",
    description:
      "Partner with Clearview for strategic marketing, thoughtful design, and innovative digital campaigns. Boost visibility, elevate engagement, and drive measurable growth for your brand.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Clearview – Smart Marketing Solutions",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Clearview – Smart Marketing Solutions That Drive Growth",
    description:
      "Strategic marketing, thoughtful design, and innovative digital campaigns that drive measurable results.",
    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD structured data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Clearview",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    "Clearview helps brands tell powerful stories and create meaningful connections through strategic marketing, thoughtful design, and innovative digital campaigns.",
  sameAs: [
    "https://twitter.com/clearview",
    "https://linkedin.com/company/clearview",
    "https://instagram.com/clearview",
    "https://facebook.com/clearview",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@clearview.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}

