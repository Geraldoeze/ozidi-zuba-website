"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id, imageUrl }: { id: number; imageUrl: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const handleDelete = async () => {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    setLoading(true);
    await fetch(`/api/gallery/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl }),
    });
    router.refresh();
    setLoading(false);
  };

  return confirming ? (
    <div className="flex gap-1 flex-1">
      <button
        onClick={() => setConfirming(false)}
        className="flex-1 text-xs py-1.5 border rounded-lg hover:bg-muted transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="flex-1 text-xs py-1.5 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors disabled:opacity-50"
      >
        {loading ? "Deleting..." : "Confirm"}
      </button>
    </div>
  ) : (
    <button
      onClick={handleDelete}
      className="flex-1 text-xs py-1.5 border border-destructive/40 text-destructive rounded-lg hover:bg-destructive/10 transition-colors"
    >
      Delete
    </button>
  );
}