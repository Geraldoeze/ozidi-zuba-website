import { put } from "@vercel/blob";
import sharp from "sharp";
import { getSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: "Unsupported image format" },
      { status: 415 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const optimized = await sharp(buffer, {
    failOn: "none", // tolerate minor HEIC encoding quirks
  })
    .rotate() // honour EXIF orientation (critical for phone photos)
    .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();

  const filename = `gallery/${Date.now()}.webp`;
  const blob = await put(filename, optimized, {
    access: "public",
    contentType: "image/webp",
  });

  return NextResponse.json({ url: blob.url });
}
