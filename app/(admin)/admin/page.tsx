import { getGalleryItems } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import DeleteButton from "./DeleteButton";

export default async function AdminDashboard() {
  const items = await getGalleryItems();

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            All Photos
          </h1>

          <p className="mt-1 text-sm text-muted-foreground md:text-base">
            {items.length} items
          </p>
        </div>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed py-20 text-center text-muted-foreground">
          <p className="mb-3">No photos yet.</p>

          <Link
            href="/admin/new"
            className="text-sm font-medium text-primary underline underline-offset-4"
          >
            Upload your first photo
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-3 md:p-4">
                <p className="truncate text-xs font-medium md:text-sm">
                  {item.title}
                </p>

                {item.caption && (
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground md:text-sm">
                    {item.caption}
                  </p>
                )}

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/admin/edit/${item.id}`}
                    className="flex-1 rounded-xl border py-2.5 text-center text-sm font-medium transition-colors hover:bg-muted"
                  >
                    Edit
                  </Link>

                  <DeleteButton
                    id={item.id}
                    imageUrl={item.image_url}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}