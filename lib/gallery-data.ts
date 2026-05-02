// Gallery data with real social media integration
export interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
  instagram?: string
  facebook?: string
  likes?: number
  comments?: number
  description: string
}

// Sample gallery items - these should be updated with real Instagram/Facebook URLs
// Format for Instagram: https://www.instagram.com/p/{POST_ID}/
// Format for Facebook: https://www.facebook.com/zubainkubwa/posts/{POST_ID}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Engine Parts Collection',
    category: 'Engine Parts',
    image: '/images/gallery/engine-parts.jpg',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
    facebook: 'https://www.facebook.com/zubainkubwa/',
    likes: 240,
    comments: 18,
    description: 'Premium engine components and parts'
  },
  {
    id: '2',
    title: 'Brake System Products',
    category: 'Brake Systems',
    image: '/images/gallery/brake-systems.jpg',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
    facebook: 'https://www.facebook.com/zubainkubwa/',
    likes: 189,
    comments: 12,
    description: 'Quality brake pads, rotors, and cylinders'
  },
  {
    id: '3',
    title: 'Suspension Components',
    category: 'Suspension',
    image: '/images/gallery/suspension.jpg',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
    facebook: 'https://www.facebook.com/zubainkubwa/',
    likes: 156,
    comments: 9,
    description: 'Shocks, springs, and suspension parts'
  },
  {
    id: '4',
    title: 'Electrical Components',
    category: 'Electrical',
    image: '/images/gallery/electrical.jpg',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
    facebook: 'https://www.facebook.com/zubainkubwa/',
    likes: 213,
    comments: 15,
    description: 'Batteries, alternators, and starters'
  },
  {
    id: '5',
    title: 'Cooling System Parts',
    category: 'Cooling',
    image: '/images/gallery/cooling-system.jpg',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
    facebook: 'https://www.facebook.com/zubainkubwa/',
    likes: 167,
    comments: 11,
    description: 'Radiators, thermostats, and water pumps'
  },
  {
    id: '6',
    title: 'Fuel System Components',
    category: 'Fuel System',
    image: '/images/gallery/fuel-system.jpg',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
    facebook: 'https://www.facebook.com/zubainkubwa/',
    likes: 198,
    comments: 14,
    description: 'Fuel filters, pumps, and injectors'
  },
  {
    id: '7',
    title: 'Transmission Parts',
    category: 'Transmission',
    image: '/images/gallery/transmission.jpg',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
    facebook: 'https://www.facebook.com/zubainkubwa/',
    likes: 145,
    comments: 8,
    description: 'Transmission fluid and related components'
  },
  {
    id: '8',
    title: 'Maintenance Products',
    category: 'Maintenance',
    image: '/images/gallery/maintenance.jpg',
    instagram: 'https://www.instagram.com/zuba_in_kubwa/',
    facebook: 'https://www.facebook.com/zubainkubwa/',
    likes: 287,
    comments: 22,
    description: 'Oil, filters, and maintenance essentials'
  }
]

export const categories = [
  'All',
  'Engine Parts',
  'Brake Systems',
  'Suspension',
  'Electrical',
  'Cooling',
  'Fuel System',
  'Transmission',
  'Maintenance'
]

export function getGalleryByCategory(category: string): GalleryItem[] {
  if (category === 'All') return galleryItems
  return galleryItems.filter(item => item.category === category)
}

export function getInstagramUrl(): string {
  return 'https://www.instagram.com/zuba_in_kubwa/'
}

export function getFacebookUrl(): string {
  return 'https://www.facebook.com/zubainkubwa/'
}
