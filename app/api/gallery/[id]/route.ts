import { auth } from "@clerk/nextjs/server";
import { del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { updateGalleryItem, deleteGalleryItem } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params; // ← await it
  const { title, caption, imageUrl } = await req.json();
  const item = await updateGalleryItem(Number(id), title, caption, imageUrl);
  return NextResponse.json(item);
}
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params; // ← await it
  const { imageUrl } = await req.json();

  if (imageUrl) await del(imageUrl);

  await deleteGalleryItem(Number(id));
  return NextResponse.json({ success: true });
}