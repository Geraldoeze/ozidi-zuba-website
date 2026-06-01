import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_URL = "https://ozidizubainkubwa.com.ng";

export const metadata: Metadata = {
  title: "Ozidi Zuba in Kubwa | Motor Spare Parts & Car Maintenance - Abuja",
  description:
    "Authentic motor spare parts shopping center in Kubwa, Abuja. Quality car maintenance products and services for Nigerian vehicles. Trusted supplier of genuine auto parts.",
  keywords:
    "motor spare parts Abuja, car maintenance Kubwa, auto parts Nigeria, vehicle spare parts, car maintenance services",
  authors: [{ name: "Ozidi Zuba in Kubwa" }],
  openGraph: {
    title: "Ozidi Zuba in Kubwa | Motor Spare Parts & Car Maintenance",
    description:
      "Premium motor spare parts and car maintenance products in Abuja. Your trusted source for quality auto parts.",
    type: "website",
    locale: "en_NG",
    url: BASE_URL,                           // ✅ fixed
    siteName: "Ozidi Zuba in Kubwa",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg",
        width: 512,
        height: 512,
        alt: "Ozidi Zuba in Kubwa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozidi Zuba in Kubwa | Motor Spare Parts",
    description: "Quality auto parts and car maintenance services in Abuja",
  },
  alternates: {
    canonical: BASE_URL,                     // ✅ fixed
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      {
        url: "/android-chrome-192x192.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/android-chrome-512x512.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",                // ✅ fixed — .ico is not svg
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c79a5d" },
    { media: "(prefers-color-scheme: dark)", color: "#c79a5d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-background scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        {/* ✅ moved og:site_name into metadata.openGraph.siteName above — no need to duplicate here */}
        <meta name="google-site-verification" content="v5oZCuUCrLYOov8YWpWqx3r7HmoriwRvM9DD1sF9WWo" />
        <meta name="msvalidate.01" content="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ozidi Zuba" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />  {/* ✅ use local file */}

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ozidi Zuba in Kubwa",
              description: "Authentic motor spare parts shopping center in Kubwa, Abuja",
              url: BASE_URL,                 // ✅ fixed
              telephone: "+234...",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kubwa",
                addressLocality: "Abuja",
                addressRegion: "FCT",
                postalCode: "",
                addressCountry: "NG",
              },
              priceRange: "₦₦₦",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg",
              sameAs: [
                "https://www.facebook.com/zubainkubwa/",
                "https://www.instagram.com/zuba_in_kubwa/",
              ],
              potentialAction: {             // ✅ moved SearchAction here — hasMenu was wrong type
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${BASE_URL}/products?search={search_term_string}`,  // ✅ fixed
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ozidi Zuba in Kubwa",
              url: BASE_URL,                 // ✅ fixed
              logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg",
              sameAs: [
                "https://www.facebook.com/zubainkubwa/",
                "https://www.instagram.com/zuba_in_kubwa/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234...",
                contactType: "Customer Service",
                areaServed: "NG",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ClerkProvider>
          {children}
          {process.env.NODE_ENV === "production" && <Analytics />}
        </ClerkProvider>
      </body>
    </html>
  );
}