// 'use client'

// import Navigation from '@/components/Navigation'
// import Footer from '@/components/Footer'
// import Breadcrumb from '@/components/Breadcrumb'
// import Image from 'next/image'
// import { galleryItems, categories, getInstagramUrl, getFacebookUrl } from '@/lib/gallery-data'
// import { useState } from 'react'
// import type { Metadata } from 'next'
// import { Image as ImageIcon, Instagram, Facebook } from 'lucide-react'

// export const metadata: Metadata = {
//   title: 'Gallery - Ozidi Zuba in Kubwa | Motor Spare Parts Gallery',
//   description: 'View our gallery of motor spare parts, car maintenance products, and customer updates from Ozidi Zuba in Kubwa. Follow us on Instagram and Facebook for more content.',
//   keywords: 'gallery, motor spare parts photos, car maintenance, Ozidi Zuba gallery, automotive parts',
//   alternates: {
//     canonical: 'https://zubainkubwa.com/gallery',
//   },
// }

// export default function Gallery() {
//   const [selectedCategory, setSelectedCategory] = useState('All')

//   const filteredItems = selectedCategory === 'All'
//     ? galleryItems
//     : galleryItems.filter(item => item.category === selectedCategory)

//   return (
//     <>
//       <Navigation />
//       <Breadcrumb />
//       <main className="min-h-screen bg-background">
//         {/* Header */}
//         <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center gap-3 mb-4 animate-slide-in">
//               <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
//                 <ImageIcon className="text-primary" size={20} />
//               </div>
//               <span className="text-sm font-semibold text-primary uppercase tracking-wider">Gallery</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-slide-in">
//               Our Products & Services
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-2xl text-pretty animate-slide-up">
//               Explore our comprehensive range of genuine motor spare parts and professional car maintenance products. Connect with us on Instagram and Facebook for the latest updates.
//             </p>
//           </div>
//         </section>

//         {/* Category Filter */}
//         <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex flex-wrap gap-2 md:gap-3">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                     selectedCategory === category
//                       ? 'bg-primary text-primary-foreground shadow-lg'
//                       : 'bg-card text-foreground border border-border hover:border-primary/50'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Gallery Grid */}
//         <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             {filteredItems.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//                 {filteredItems.map((item, index) => (
//                   <div
//                     key={item.id}
//                     className="animate-fade-in"
//                     style={{ animationDelay: `${index * 50}ms` }}
//                   >
//                     <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
//                       {/* Image */}
//                       <div className="relative w-full aspect-square overflow-hidden bg-muted">
//                         <Image
//                           src={item.image}
//                           alt={item.title}
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-300"
//                           quality={80}
//                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                         />

//                         {/* Overlay with actions */}
//                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center gap-3">
//                           {item.instagram && (
//                             <a
//                               href={item.instagram}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-lg flex items-center justify-center transition-all transform opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75"
//                               title="View on Instagram"
//                             >
//                               <Instagram size={20} className="text-white" />
//                             </a>
//                           )}
//                           {item.facebook && (
//                             <a
//                               href={item.facebook}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-lg flex items-center justify-center transition-all transform opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-75"
//                               title="View on Facebook"
//                             >
//                               <Facebook size={20} className="text-white" />
//                             </a>
//                           )}
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="p-4">
//                         <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
//                           {item.description}
//                         </p>

//                         {/* Engagement metrics */}
//                         <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
//                           <span>👍 {item.likes} likes</span>
//                           <span>💬 {item.comments} comments</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12">
//                 <p className="text-muted-foreground text-lg">No products found in this category.</p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Social Media CTA */}
//         <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center animate-slide-up">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
//                 Follow Us for Daily Updates
//               </h2>
//               <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
//                 Stay connected with Ozidi Zuba in Kubwa for the latest product arrivals, special offers, maintenance tips, and automotive industry insights.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a
//                   href={getInstagramUrl()}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium group"
//                 >
//                   <Instagram size={20} className="group-hover:animate-bounce" />
//                   Follow on Instagram
//                 </a>
//                 <a
//                   href={getFacebookUrl()}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium group"
//                 >
//                   <Facebook size={20} className="group-hover:animate-bounce" />
//                   Follow on Facebook
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   )
// }

import type { Metadata } from "next";
import GalleryClient from "./client-data";

export const metadata: Metadata = {
  title: "Gallery - Ozidi Zuba in Kubwa | Motor Spare Parts Gallery",
  description:
    "View our gallery of motor spare parts, car maintenance products, and customer updates from Ozidi Zuba in Kubwa.",
  keywords:
    "gallery, motor spare parts photos, car maintenance, Ozidi Zuba gallery, automotive parts",
  alternates: {
    canonical: "https://zubainkubwa.com/gallery",
  },
};

export default function Page() {
  return <GalleryClient />;
}
