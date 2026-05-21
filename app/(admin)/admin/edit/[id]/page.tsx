import { sql } from "@vercel/postgres";
import { notFound } from "next/navigation";
import EditForm, { GalleryItem } from "./EditForm";


async function getItem(id: string) {
  const { rows } = await sql`SELECT * FROM gallery_items WHERE id=${id} LIMIT 1`;
  return rows[0] ?? null;
}

export default async function EditPage({ params }: { params: { id: string } }) {
  const item = await getItem(params.id);
  if (!item) notFound();
  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold mb-6">Edit Item</h1>
      <EditForm item={item as GalleryItem} />
    </div>
  );
}