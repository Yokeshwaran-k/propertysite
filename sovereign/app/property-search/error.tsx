"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h2 className="text-lg font-semibold text-gray-900">
        Something went wrong loading properties
      </h2>
      <p className="mt-2 text-sm text-gray-500">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-sm bg-amber-700 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-amber-800"
      >
        Try again
      </button>
    </div>
  );
}