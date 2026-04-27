import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ozidi Zuba in Kubwa | Motor Spare Parts & Car Maintenance - Abuja',
  description: 'Authentic motor spare parts shopping center in Kubwa, Abuja. Quality car maintenance products and services for Nigerian vehicles. Trusted supplier of genuine auto parts.',
  keywords: 'motor spare parts Abuja, car maintenance Kubwa, auto parts Nigeria, vehicle spare parts, car maintenance services',
  authors: [{ name: 'Ozidi Zuba in Kubwa' }],
  openGraph: {
    title: 'Ozidi Zuba in Kubwa | Motor Spare Parts & Car Maintenance',
    description: 'Premium motor spare parts and car maintenance products in Abuja. Your trusted source for quality auto parts.',
    type: 'website',
    locale: 'en_NG',
    url: 'https://zubainkubwa.com',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg',
        width: 512,
        height: 512,
        alt: 'Ozidi Zuba in Kubwa Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ozidi Zuba in Kubwa | Motor Spare Parts',
    description: 'Quality auto parts and car maintenance services in Abuja',
  },
  alternates: {
    canonical: 'https://zubainkubwa.com',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#c79a5d' },
    { media: '(prefers-color-scheme: dark)', color: '#c79a5d' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Ozidi Zuba in Kubwa" />
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ozidi Zuba" />
        <link rel="apple-touch-icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'Ozidi Zuba in Kubwa',
              'description': 'Authentic motor spare parts shopping center',
              'url': 'https://zubainkubwa.com',
              'telephone': '+234...', // Will be updated
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Kubwa',
                'addressLocality': 'Abuja',
                'postalCode': '',
                'addressCountry': 'NG'
              },
              'priceRange': '₦₦₦',
              'image': 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg',
              'sameAs': [
                'https://www.facebook.com/zubainkubwa/',
                'https://www.instagram.com/zuba_in_kubwa/'
              ]
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
