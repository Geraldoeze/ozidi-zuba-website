import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import GalleryCard from '@/components/GalleryCard'
import type { Metadata } from 'next'
import { Image as ImageIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery - Ozidi Zuba in Kubwa | Motor Spare Parts Gallery',
  description: 'View our gallery of motor spare parts, car maintenance products, and customer updates from Ozidi Zuba in Kubwa. Follow us on Instagram and Facebook for more content.',
  keywords: 'gallery, motor spare parts photos, car maintenance, Ozidi Zuba gallery',
  alternates: {
    canonical: 'https://zubainkubwa.com/gallery',
  },
}

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1486262715619-3417ca6ef218?w=500&h=500&fit=crop',
      title: 'Premium Engine Parts Selection',
      description: 'Quality engine components including filters, gaskets, and seals for all vehicle types. Get genuine OEM and aftermarket options.',
      platform: 'instagram' as const,
      link: 'https://www.instagram.com/zuba_in_kubwa/',
      likes: 342,
      comments: 28,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1487754180144-351b8e29fbdf?w=500&h=500&fit=crop',
      title: 'Brake System Components',
      description: 'Complete brake pad sets, rotors, and brake fluid. Ensure your vehicle stops safely with our reliable brake components.',
      platform: 'facebook' as const,
      link: 'https://www.facebook.com/zubainkubwa/',
      likes: 189,
      comments: 15,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552454743-c0ecd2fe73fa?w=500&h=500&fit=crop',
      title: 'Suspension & Steering Parts',
      description: 'Shock absorbers, struts, springs, and steering components for smooth and safe driving experience.',
      platform: 'instagram' as const,
      link: 'https://www.instagram.com/zuba_in_kubwa/',
      likes: 267,
      comments: 22,
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519824712712-83e04f0e8fcf?w=500&h=500&fit=crop',
      title: 'Electrical Components',
      description: 'Batteries, alternators, starters, and wiring harnesses. Keep your electrical system in top condition.',
      platform: 'facebook' as const,
      link: 'https://www.facebook.com/zubainkubwa/',
      likes: 215,
      comments: 18,
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1486361494519-c1d4d4e1a002?w=500&h=500&fit=crop',
      title: 'Cooling System Parts',
      description: 'Radiators, thermostats, water pumps, and cooling hoses. Maintain optimal engine temperature.',
      platform: 'instagram' as const,
      link: 'https://www.instagram.com/zuba_in_kubwa/',
      likes: 298,
      comments: 25,
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1581078519571-b8c856f47697?w=500&h=500&fit=crop',
      title: 'Fuel System Components',
      description: 'Fuel filters, pumps, injectors, and regulators for efficient engine performance.',
      platform: 'facebook' as const,
      link: 'https://www.facebook.com/zubainkubwa/',
      likes: 203,
      comments: 20,
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1487754180144-351b8e29fbdf?w=500&h=500&fit=crop',
      title: 'Transmission & Drive',
      description: 'Transmission fluid, belts, chains, and drive components for reliable vehicle operation.',
      platform: 'instagram' as const,
      link: 'https://www.instagram.com/zuba_in_kubwa/',
      likes: 276,
      comments: 23,
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1486262715619-3417ca6ef218?w=500&h=500&fit=crop',
      title: 'Maintenance Services',
      description: 'Expert maintenance advice and premium products for keeping your vehicle in perfect condition year-round.',
      platform: 'facebook' as const,
      link: 'https://www.facebook.com/zubainkubwa/',
      likes: 334,
      comments: 31,
    },
  ]

  return (
    <>
      <Navigation />
      <Breadcrumb />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <ImageIcon className="text-primary" size={20} />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gallery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Products & Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              Explore our comprehensive range of motor spare parts and car maintenance products. Follow us on social media for the latest updates and product launches.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  platform={item.platform}
                  link={item.link}
                  likes={item.likes}
                  comments={item.comments}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Media CTA */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Follow Us for More
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Stay updated with the latest products, offers, and industry insights. Follow our social media channels for daily updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.instagram.com/zuba_in_kubwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Follow on Instagram
                </a>
                <a
                  href="https://www.facebook.com/zubainkubwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
