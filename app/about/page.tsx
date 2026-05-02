import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Image from 'next/image'
import type { Metadata } from 'next'
import { CheckCircle2, Users, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Ozidi Zuba in Kubwa | Authentic Motor Spare Parts Center - Abuja',
  description: 'Discover Ozidi Zuba in Kubwa, an authentic motor spare parts shopping center in Abuja. We provide genuine auto parts and car maintenance products with expert service.',
  keywords: 'about Ozidi Zuba, motor spare parts Abuja, car maintenance services, auto parts company',
  alternates: {
    canonical: 'https://zubainkubwa.com/about',
  },
}

export default function About() {
  return (
    <>
      <Navigation />
      <Breadcrumb />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold">About Ozidi Zuba in Kubwa</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your trusted partner in automotive excellence and genuine spare parts
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Image */}
              <div className="order-2 md:order-1 animate-fade-in">
                <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <Image
                    src="/images/about-storefront.jpg"
                    alt="Ozidi Zuba in Kubwa Storefront - Motor Spare Parts Center"
                    fill
                    className="object-cover"
                    quality={85}
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ozidi Zuba in Kubwa is an authentic motor spare parts shopping center dedicated to satisfying the needs and wants of our teeming customers. We pride ourselves on providing quality products and exceptional service to vehicle owners throughout Abuja and Nigeria.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience in the automotive industry, we have built a reputation for reliability, authenticity, and customer satisfaction. Our commitment is to ensure every customer finds exactly what they need for their vehicle maintenance.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Authentic Products</h3>
                      <p className="text-muted-foreground">All our spare parts are genuine and sourced from trusted suppliers</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Expert Staff</h3>
                      <p className="text-muted-foreground">Our knowledgeable team provides professional advice for all your needs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Competitive Pricing</h3>
                      <p className="text-muted-foreground">Quality products at prices that won&apos;t break your budget</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Values */}
            <div className="grid md:grid-cols-3 gap-8 my-16">
              <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                <Zap className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide authentic, quality motor spare parts and car maintenance products that satisfy the needs of all vehicle owners in Nigeria.
                </p>
              </div>

              <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and preferred motor spare parts shopping center in Abuja and across Nigeria.
                </p>
              </div>

              <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                <CheckCircle2 className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Authenticity, quality, customer satisfaction, and integrity in every transaction.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Motor Spare Parts</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Engine components and filters
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Brake systems and pads
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Suspension and steering parts
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Electrical components
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Cooling system parts
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary">Car Maintenance Products</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Engine oils and lubricants
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Coolants and fluids
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Cleaning and maintenance products
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Auto accessories
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      Performance enhancement products
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
