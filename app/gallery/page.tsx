import type { Metadata } from "next";
import { getGalleryItems } from "@/lib/db";
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
  const items = await getGalleryItems();
  return <GalleryClient items={items} />;
}