import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Vanguard Advisory | Business Structuring & Risk Advisory – Philippines",
  description:
    "Philippines-based business structuring and risk advisory firm. We design corporate structures that protect wealth, reduce tax exposure, and ensure business risk stays contained for entrepreneurs and high-net-worth individuals.",
  keywords: [
    "business structuring Philippines",
    "risk advisory",
    "asset protection Philippines",
    "tax optimization BIR",
    "corporate structuring SEC",
    "wealth protection",
    "family business Philippines",
    "foreign business Philippines",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Vanguard Advisory | Protect Your Wealth Before Problems Begin",
    description:
      "Premium business structuring and risk advisory in the Philippines. Corporate structuring, tax optimization, and asset protection for serious entrepreneurs.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanguard Advisory | Business Structuring & Risk Advisory",
    description:
      "We design business structures that protect wealth, reduce tax exposure, and ensure business risk stays contained.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
