"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export type GalleryItem = {
  id: number;
  title: string;
  caption: string;
  image_url: string;
};

export default function EditForm({ item }: { item: GalleryItem }) {
  const router = useRouter();
  const [title, setTitle] = useState(item.title);
  const [caption, setCaption] = useState(item.caption ?? "");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      let imageUrl: string | undefined;

      // Only upload a new image if the user picked one
      if (file) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await res.json();
        imageUrl = data.url;
      }

      await fetch(`/api/gallery/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, caption, imageUrl }),
      });

      router.push("/admin");
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title *</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 bg-background"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Caption</label>
        <textarea
          value={caption}
          onChange={e => setCaption(e.target.value)}
          rows={3}
          className="w-full border rounded-lg px-3 py-2 bg-background"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Image</label>
        <p className="text-xs text-muted-foreground mb-2">
          Leave blank to keep the current image.
        </p>
        {/* Current image */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-3">
          <Image
            src={preview ?? item.image_url}
            alt={title}
            fill
            className="object-cover"
          />
          {preview && (
            <span className="absolute top-2 left-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded-full">
              New image
            </span>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleFile} className="w-full" />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={() => router.push("/admin")}
          className="flex-1 py-2.5 border rounded-lg text-sm"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading || !title}
          className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}