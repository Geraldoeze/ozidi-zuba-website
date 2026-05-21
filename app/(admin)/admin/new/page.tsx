"use client";
import { useState } from "react";
import heic2any from "heic2any";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function NewItemPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;

    const isHeic =
      f.type === "image/heic" ||
      f.type === "image/heif" ||
      f.name.toLowerCase().endsWith(".heic") ||
      f.name.toLowerCase().endsWith(".heif");

    if (isHeic) {
      setPreview("loading");
      try {
        // Convert HEIC → JPEG blob in the browser before upload
        const converted = await heic2any({
          blob: f,
          toType: "image/jpeg",
          quality: 0.9,
        });
        const jpegBlob = Array.isArray(converted) ? converted[0] : converted;
        const jpegFile = new File(
          [jpegBlob],
          f.name.replace(/\.heic$/i, ".jpg"),
          {
            type: "image/jpeg",
          }
        );
        setFile(jpegFile); // upload the JPEG, not the HEIC
        const reader = new FileReader();
        reader.onload = (ev) => setPreview(ev.target?.result as string);
        reader.readAsDataURL(jpegFile);
      } catch (err) {
        console.error("HEIC conversion failed", err);
        setPreview(null);
      }
    } else {
      setFile(f);
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target?.result as string);
      reader.readAsDataURL(f);
    }
  };

  const handleSubmit = async () => {
    if (!file || !title) return;
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });
      const { url } = await uploadRes.json();

      await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, caption, imageUrl: url }),
      });

      router.push("/admin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-5">Add New Photo</h1>

      <div className="space-y-4">
        {/* Image picker first — most important action */}
        <div>
          <label className="block text-sm font-medium mb-2">Photo *</label>

          {preview === "loading" ? (
            <div className="relative aspect-square rounded-xl bg-muted flex items-center justify-center mb-2">
              <span className="text-sm text-muted-foreground">
                Converting photo...
              </span>
            </div>
          ) : preview ? (
            <div className="relative aspect-square rounded-xl overflow-hidden bg-muted mb-2">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
              />
              {/* Tap image to change it */}
              <label className="absolute inset-0 flex items-end justify-center pb-4 cursor-pointer">
                <span className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                  Tap to change photo
                </span>
                <input
                  type="file"
                  accept="image/*,image/heic,image/heif"
                  capture="environment"
                  onChange={handleFile}
                  className="sr-only"
                />
              </label>
            </div>
          ) : (
            // Big tap target for camera/gallery on mobile
            <label className="flex flex-col items-center justify-center w-full aspect-square border-2 border-dashed rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground mb-3"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
              <span className="text-sm font-medium text-muted-foreground">
                Take or choose a photo
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                Opens camera or gallery
              </span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFile}
                className="sr-only"
              />
            </label>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Title *</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg px-3 py-3 bg-background text-sm"
            placeholder="e.g. Brake Pads — Toyota Camry"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={3}
            className="w-full border rounded-lg px-3 py-3 bg-background text-sm resize-none"
            placeholder="Short description shown under the photo..."
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !file || !title}
          className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {loading ? "Uploading..." : "Publish Photo"}
        </button>
      </div>
    </div>
  );
}
