"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Images, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LIMIT = 20;

type GalleryItem = {
  id: number;
  title: string;
  caption: string;
  image_url: string;
  created_at: string;
};

// ── Skeleton card ─────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden border bg-card animate-pulse">
      <div className="aspect-square bg-muted" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-muted rounded w-3/4" />
        <div className="h-3 bg-muted rounded w-1/2" />
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function GalleryClient({
  initialItems,
  total,
}: {
  initialItems: any[];
  total: number;
}) {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const hasMore = items.length < total;

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/gallery?limit=${LIMIT}&offset=${items.length}`
      );
      const data = await res.json();
      setItems((prev) => [...prev, ...data.items]);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, items.length]);

  // IntersectionObserver watches the sentinel div at the bottom
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: "200px" } // trigger 200px before reaching bottom
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

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
                <Images className="text-primary" size={20} />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Gallery
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Latest Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse our latest motor spare parts and automotive products.
            </p>
          </div>

          <Link
            href="/sign-in"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg"
          >
            <Plus size={18} />
            Add Photo
          </Link>
        </section>

        {/* Gallery grid */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {items.length === 0 && !loading ? (
              <div className="text-center py-24 text-muted-foreground">
                No items in the gallery yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Real items */}
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="cursor-pointer group rounded-xl overflow-hidden border bg-card"
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.caption && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Skeleton placeholders while loading next batch */}
                {loading &&
                  Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={`sk-${i}`} />
                  ))}
              </div>
            )}

            {/* Sentinel — IntersectionObserver watches this */}
            <div ref={sentinelRef} className="h-1" />

            {/* End of results */}
            {!hasMore && items.length > 0 && (
              <p className="text-center text-sm text-muted-foreground mt-10">
                All {total} photos loaded
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-background max-w-3xl w-full rounded-xl overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-square bg-black">
              <Image
                src={selected.image_url}
                alt={selected.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{selected.title}</h2>
              {selected.caption && (
                <p className="text-sm text-muted-foreground mt-2">
                  {selected.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}