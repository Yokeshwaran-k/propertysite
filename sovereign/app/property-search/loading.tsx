export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl animate-pulse px-4 py-8">
      <div className="mb-6 h-10 w-full max-w-md rounded bg-gray-200" />
      <div className="mb-4 h-16 w-full rounded bg-gray-100" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex gap-4 border-b border-gray-200 py-4">
          <div className="h-32 w-48 flex-shrink-0 rounded-sm bg-gray-200" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="h-4 w-56 rounded bg-gray-200" />
            <div className="h-3 w-20 rounded bg-gray-200" />
            <div className="h-3 w-full max-w-md rounded bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}