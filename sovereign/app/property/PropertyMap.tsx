export default function PropertyMap({
  lat,
  lng,
  label,
}: {
  lat: number | null;
  lng: number | null;
  label: string;
}) {
  if (lat === null || lng === null) return null;

  const src = `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;

  return (
    <section id="map" className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Location</h2>
      <div className="h-80 w-full overflow-hidden rounded-sm border border-gray-200">
        <iframe
          title={`Map showing ${label}`}
          src={src}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}