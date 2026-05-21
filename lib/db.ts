import { sql } from "@vercel/postgres";

export async function initDB() {
  await sql`
    CREATE TABLE IF NOT EXISTS gallery_items (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      caption TEXT,
      image_url TEXT NOT NULL,
      sort_order INT DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function getGalleryItems() {
  await initDB(); // ← ensures table exists before querying
  const { rows } = await sql`
    SELECT * FROM gallery_items ORDER BY sort_order ASC, created_at DESC
  `;
  return rows;
}

export async function createGalleryItem(title: string, caption: string, imageUrl: string) {
  await initDB();
  const { rows } = await sql`
    INSERT INTO gallery_items (title, caption, image_url)
    VALUES (${title}, ${caption}, ${imageUrl})
    RETURNING *
  `;
  return rows[0];
}

export async function updateGalleryItem(id: number, title: string, caption: string, imageUrl?: string) {
  await initDB();
  if (imageUrl) {
    const { rows } = await sql`
      UPDATE gallery_items SET title=${title}, caption=${caption}, image_url=${imageUrl}
      WHERE id=${id} RETURNING *
    `;
    return rows[0];
  }
  const { rows } = await sql`
    UPDATE gallery_items SET title=${title}, caption=${caption}
    WHERE id=${id} RETURNING *
  `;
  return rows[0];
}

export async function deleteGalleryItem(id: number) {
  await initDB();
  await sql`DELETE FROM gallery_items WHERE id=${id}`;
}