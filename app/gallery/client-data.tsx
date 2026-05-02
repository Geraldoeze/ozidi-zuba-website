"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Instagram, ExternalLink } from "lucide-react";
import { instagramPosts } from "./instagram-data";

// Tells TypeScript that Instagram's embed script adds `instgrm` to window
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

export default function GalleryClient() {
  useEffect(() => {
    // If Instagram's embed script is already loaded, re-process embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    // Otherwise load the script once
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up only if script is still in DOM
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
                <Instagram className="text-primary" size={20} />
              </div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Instagram
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-slide-in">
              Our Latest Posts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty animate-slide-up">
              Browse our latest products and updates directly from Instagram.
              Follow us for daily arrivals and special offers.
            </p>
          </div>
        </section>

        {/* Instagram Grid */}
        <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instagramPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in flex flex-col items-center"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {/* Instagram Embed */}
                  <div
                    className="w-full"
                    dangerouslySetInnerHTML={{ __html: post.embedCode }}
                  />

                  {/* Optional caption below embed */}
                  {post.caption && (
                    <p className="mt-2 text-sm text-muted-foreground text-center px-2">
                      {post.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Follow CTA */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Follow Us on Instagram
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Stay connected with Zuba in Kubwa for the latest product
                arrivals, special offers, and automotive tips.
              </p>
              <a
                href="https://www.instagram.com/zuba_in_kubwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium group"
              >
                <Instagram size={20} className="group-hover:animate-bounce" />
                @zuba_in_kubwa
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
