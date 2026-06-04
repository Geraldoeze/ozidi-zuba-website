import { NextRequest, NextResponse } from "next/server";
import { getGalleryItemsPaginated, getGalleryItemsCount, createGalleryItem } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic"; // ← no caching on the API route either

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") ?? "20", 10);
  const offset = parseInt(searchParams.get("offset") ?? "0", 10);

  const [items, total] = await Promise.all([
    getGalleryItemsPaginated(limit, offset),
    getGalleryItemsCount(),
  ]);

  return NextResponse.json({ items, total });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, caption, imageUrl } = await req.json();
  const item = await createGalleryItem(title, caption, imageUrl);

  revalidatePath("/gallery"); // ← bust the gallery page cache after every upload

  return NextResponse.json(item);
}