// 'use client'

// import Link from 'next/link'
// import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
// import Image from 'next/image'

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Gradient Image with Overlay */}
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src="/images/hero-gradient.jpg"
//           alt="Hero gradient background"
//           fill
//           className="object-cover"
//           priority
//           quality={85}
//         />
//         {/* Dark overlay for text readability */}
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Main Heading */}
//         <div className="mb-6 animate-fade-in">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
//             Ozidi Zuba in Kubwa
//           </h1>
//           <div className="h-1 w-24 bg-primary mx-auto mb-6 rounded-full" />
//         </div>

//         {/* Subtitle */}
//         <div className="mb-8 animate-slide-up">
//           <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto text-pretty leading-relaxed">
//             Your Trusted Source for Genuine Motor Spare Parts & Professional Car Maintenance Services in Abuja
//           </p>
//         </div>

//         {/* Description */}
//         <div className="mb-10 animate-slide-up">
//           <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
//             Authentic automotive parts, expert service, and quality you can trust since day one
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
//           <Link
//             href="/products"
//             className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-gold flex items-center gap-2 w-full sm:w-auto justify-center"
//           >
//             Browse Products
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </Link>
          
//           <a
//             href="https://wa.me/234"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
//           >
//             <MessageCircle className="w-5 h-5" />
//             WhatsApp Us
//           </a>

//           <a
//             href="tel:+234"
//             className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
//           >
//             <Phone className="w-5 h-5" />
//             Call Now
//           </a>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-slide-up">
//           <div className="text-center">
//             <div className="text-4xl font-bold text-primary mb-2">100%</div>
//             <p className="text-gray-300">Genuine Parts</p>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-primary mb-2">10+ Yrs</div>
//             <p className="text-gray-300">Industry Experience</p>
//           </div>
//           <div className="text-center">
//             <div className="text-4xl font-bold text-primary mb-2">1000+</div>
//             <p className="text-gray-300">Happy Customers</p>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-sm text-gray-300">Scroll to explore</span>
//           <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-20 sm:pt-24 md:pt-0 md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-gradient.jpg"
          alt="Hero gradient background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 md:py-0">
        {/* Heading */}
        <div className="mb-5 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance leading-tight">
            Ozidi Zuba in Kubwa
          </h1>

          <div className="h-1 w-20 sm:w-24 bg-primary mx-auto rounded-full" />
        </div>

        {/* Subtitle */}
        <div className="mb-6 animate-slide-up">
          <p className="text-base sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed px-2">
            Your Trusted Source for Genuine Motor Spare Parts &
            Professional Car Maintenance Services in Abuja
          </p>
        </div>

        {/* Description */}
        <div className="mb-8 animate-slide-up">
          <p className="text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto px-2">
            Authentic automotive parts, expert service, and quality you can trust.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up">
          <Link
            href="/products"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Browse Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="https://wa.me/234"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>

          <a
            href="tel:+234"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 animate-slide-up">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
              100%
            </div>
            <p className="text-gray-300 text-sm sm:text-base">Genuine Parts</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
              10+ Yrs
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Industry Experience
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
              1000+
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              Happy Customers
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-300">Scroll to explore</span>

          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}