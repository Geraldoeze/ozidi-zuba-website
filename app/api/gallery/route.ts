import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getGalleryItems, createGalleryItem } from "@/lib/db";

export async function GET() {
  const items = await getGalleryItems();
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { title, caption, imageUrl } = await req.json();
  const item = await createGalleryItem(title, caption, imageUrl);
  return NextResponse.json(item);
}