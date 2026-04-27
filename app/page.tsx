import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, Wrench, Package, Clock, Award } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-12 md:py-24">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen blur-3xl" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-screen blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 animate-slide-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Quality <span className="text-primary">Motor Spare Parts</span> for Nigerian Roads
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Your trusted authentic motor spare parts shopping center in Kubwa, Abuja. We satisfy the needs of all vehicle owners with genuine, quality car maintenance products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5 font-medium group"
                  >
                    Browse Products
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/234..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all font-medium"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Right - Logo Display */}
              <div className="flex justify-center animate-scale-in">
                <div className="relative w-full max-w-md h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7r62LpUt5ENpfSYyQMsfHSJZE4kM6F.jpg"
                    alt="Ozidi Zuba in Kubwa Logo"
                    className="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Choose Us?</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Decades of experience serving vehicle owners across Abuja and Nigeria
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Award size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Authentic Products</h3>
                <p className="text-sm text-muted-foreground">
                  100% genuine motor spare parts and car maintenance products for all vehicle types.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Clock size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast Service</h3>
                <p className="text-sm text-muted-foreground">
                  Quick turnaround on orders with efficient service and delivery options available.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Package size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Wide Selection</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive range of spare parts and maintenance products for all car models.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Wrench size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Advice</h3>
                <p className="text-sm text-muted-foreground">
                  Professional guidance on selecting the right parts for your vehicle maintenance needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
              Need Motor Spare Parts Today?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us directly via WhatsApp for instant response. We&apos;re available for your vehicle maintenance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/234..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 font-semibold text-lg group"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.906 1.235l-.344.214-3.558-.93.949 3.434.276.44a9.86 9.86 0 001.518 5.594c.944 1.595 2.278 3.007 3.822 4.089 1.544.996 3.33 1.702 5.142 1.971.714.116 1.432.17 2.151.168 5.415 0 9.843-4.428 9.843-9.843 0-.011 0-.021 0-.032 0-2.627-.973-5.144-2.748-7.112-1.775-1.968-4.31-3.076-6.933-3.081z"/>
                </svg>
                Contact on WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all font-semibold text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
