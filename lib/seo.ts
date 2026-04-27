export const siteConfig = {
  name: 'Ozidi Zuba in Kubwa',
  description: 'Authentic motor spare parts shopping center in Kubwa, Abuja. Quality car maintenance products and services for Nigerian vehicles.',
  url: 'https://zubainkubwa.com',
  ogImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg',
  keywords: [
    'motor spare parts',
    'car maintenance',
    'Abuja',
    'Kubwa',
    'auto parts Nigeria',
    'vehicle spare parts',
    'engine parts',
    'brake systems',
    'suspension parts',
    'electrical components',
  ],
  location: {
    address: 'Kubwa',
    city: 'Abuja',
    country: 'Nigeria',
    coordinates: {
      lat: 9.1833,
      lng: 7.3333,
    },
  },
  social: {
    facebook: 'https://www.facebook.com/zubainkubwa/',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
  },
}

export function generateMetadataFromConfig(title: string, description: string) {
  return {
    title: `${title} - ${siteConfig.name}`,
    description,
    keywords: siteConfig.keywords.join(', '),
    openGraph: {
      title: `${title} - ${siteConfig.name}`,
      description,
      type: 'website',
      locale: 'en_NG',
      url: siteConfig.url,
      images: [
        {
          url: siteConfig.ogImage,
          width: 512,
          height: 512,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - ${siteConfig.name}`,
      description,
    },
  }
}

export function generateSchemaOrg() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    url: siteConfig.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.coordinates.lat,
      longitude: siteConfig.location.coordinates.lng,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['en'],
    },
    priceRange: '₦₦₦',
  }
}
