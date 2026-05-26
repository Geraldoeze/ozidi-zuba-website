"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Images, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  id: number;
  title: string;
  caption: string;
  image_url: string;
  created_at: string;
};

export default function GalleryClient({ items }: { items: any[] }) {
  return (
    <>
      <Navigation />
      <Breadcrumb />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4 animate-slide-in">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Images className="text-primary" size={20} />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Gallery
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-slide-in">
              Our Latest Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty animate-slide-up">
              Browse our latest motor spare parts and automotive products. Visit
              us in Kubwa for the best deals.
            </p>
          </div>
          <div>
            {/* Floating upload button */}
            <Link
              href="/sign-in?redirect_url=/admin/new"
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              <Plus size={18} />
              Add Photo
            </Link>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {items.length === 0 ? (
              <div className="text-center py-24 text-muted-foreground">
                No items in the gallery yet. Check back soon.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="animate-fade-in group rounded-xl overflow-hidden border bg-card"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Text overlay at bottom */}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {item.caption && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
