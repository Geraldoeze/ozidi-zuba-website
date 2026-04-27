import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import type { Metadata } from 'next'
import { Package, Zap, Wrench, Filter, Wind, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Motor Spare Parts & Products - Ozidi Zuba in Kubwa | Abuja',
  description: 'Genuine motor spare parts, car maintenance products, and auto accessories in Abuja. Engine filters, brake systems, electrical components, and more.',
  keywords: 'motor spare parts Abuja, car maintenance products, auto accessories, engine filters, brake pads, suspension parts, electrical components',
  alternates: {
    canonical: 'https://zubainkubwa.com/products',
  },
}

const products = [
  {
    icon: Filter,
    title: 'Air & Oil Filters',
    description: 'Quality engine filters for optimal vehicle performance and longevity.',
    items: ['Engine air filters', 'Oil filters', 'Cabin air filters', 'Fuel filters']
  },
  {
    icon: Wind,
    title: 'Cooling Systems',
    description: 'Complete cooling system components to keep your engine at the right temperature.',
    items: ['Radiators', 'Cooling fans', 'Thermostats', 'Water pumps', 'Hoses & clamps']
  },
  {
    icon: Zap,
    title: 'Electrical Components',
    description: 'Essential electrical parts for reliable vehicle operation.',
    items: ['Alternators', 'Starters', 'Batteries', 'Spark plugs', 'Wiring & connectors']
  },
  {
    icon: Wrench,
    title: 'Suspension & Steering',
    description: 'Components for safe handling and comfortable driving experience.',
    items: ['Shock absorbers', 'Tie rods', 'Control arms', 'Strut assemblies', 'Sway bars']
  },
  {
    icon: Shield,
    title: 'Brake Systems',
    description: 'High-quality brake components for your vehicle safety.',
    items: ['Brake pads', 'Brake rotors', 'Brake fluid', 'Calipers', 'Master cylinders']
  },
  {
    icon: Package,
    title: 'Engine Parts',
    description: 'Essential engine components for maintenance and repairs.',
    items: ['Gaskets & seals', 'Timing belts', 'Pulleys', 'Hoses', 'PCV valves']
  }
]

const maintenanceProducts = [
  { name: 'Synthetic Engine Oil', category: 'Lubricants' },
  { name: 'Coolants & Antifreeze', category: 'Fluids' },
  { name: 'Brake Fluid', category: 'Fluids' },
  { name: 'Transmission Fluid', category: 'Fluids' },
  { name: 'Power Steering Fluid', category: 'Fluids' },
  { name: 'Fuel System Cleaner', category: 'Additives' },
  { name: 'Engine Degreaser', category: 'Cleaning' },
  { name: 'Car Wax & Polish', category: 'Cosmetic' },
  { name: 'Air Fresheners', category: 'Accessories' },
  { name: 'Floor Mats', category: 'Accessories' },
  { name: 'Jumper Cables', category: 'Tools' },
  { name: 'Engine Start Kit', category: 'Emergency' },
]

export default function Products() {
  return (
    <>
      <Navigation />
      <Breadcrumb />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold">Our Products</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive range of genuine motor spare parts and car maintenance products
              </p>
            </div>
          </div>
        </section>

        {/* Main Products Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Spare Parts Categories</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => {
                const Icon = product.icon
                return (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <ul className="space-y-2">
                      {product.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Maintenance Products */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Maintenance Products</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {maintenanceProducts.map((product, index) => (
                <div
                  key={index}
                  className="p-4 bg-background rounded-lg border border-border/50 hover:border-primary/50 transition-all group hover:shadow-md animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Products */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Products?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">100% Genuine</h3>
                    <p className="text-muted-foreground">All products are authentic and sourced from trusted manufacturers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quality Assured</h3>
                    <p className="text-muted-foreground">Each product meets international quality standards and specifications.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Competitive Pricing</h3>
                    <p className="text-muted-foreground">Best prices for quality products without compromising on standards.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Support</h3>
                    <p className="text-muted-foreground">Our team provides professional advice on product selection and installation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Wide Range</h3>
                    <p className="text-muted-foreground">Comprehensive selection covering all major vehicle types and models.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">✓</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fast Delivery</h3>
                    <p className="text-muted-foreground">Quick turnaround on orders with reliable delivery options available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Specific Part?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us via WhatsApp with your vehicle details and part requirements. Our team will help you find exactly what you need.
            </p>
            <a
              href="https://wa.me/234..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
