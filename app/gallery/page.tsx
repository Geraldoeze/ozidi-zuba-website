import type { Metadata } from "next";
import { getGalleryItemsPaginated, getGalleryItemsCount } from "@/lib/db";
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

export default async function GalleryPage() {
  const [items, total] = await Promise.all([
    getGalleryItemsPaginated(20, 0),
    getGalleryItemsCount(),
  ]);
  return <GalleryClient initialItems={items} total={total} />;
}