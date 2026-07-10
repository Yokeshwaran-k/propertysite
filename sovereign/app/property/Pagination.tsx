import Link from "next/link";

function buildHref(params: URLSearchParams, page: number) {
  const p = new URLSearchParams(params.toString());
  p.set("page", String(page));
  return `/property-search?${p.toString()}`;
}

export default function Pagination({
  page,
  totalPages,
  searchParams,
}: {
  page: number;
  totalPages: number;
  searchParams: Record<string, string | string[] | undefined>;
}) {
  if (totalPages <= 1) return null;

  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (key === "page") return;
    if (typeof value === "string") params.set(key, value);
  });

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mt-6 flex items-center justify-center gap-1 text-sm">
      <Link
        href={buildHref(params, Math.max(1, page - 1))}
        aria-disabled={page === 1}
        className={`rounded-sm border px-3 py-1.5 ${
          page === 1
            ? "pointer-events-none border-gray-200 text-gray-300"
            : "border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700"
        }`}
      >
        Prev
      </Link>

      {pages.map((p) => (
        <Link
          key={p}
          href={buildHref(params, p)}
          className={`rounded-sm border px-3 py-1.5 ${
            p === page
              ? "border-amber-700 bg-amber-700 text-white"
              : "border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700"
          }`}
        >
          {p}
        </Link>
      ))}

      <Link
        href={buildHref(params, Math.min(totalPages, page + 1))}
        aria-disabled={page === totalPages}
        className={`rounded-sm border px-3 py-1.5 ${
          page === totalPages
            ? "pointer-events-none border-gray-200 text-gray-300"
            : "border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700"
        }`}
      >
        Next
      </Link>
    </nav>
  );
}