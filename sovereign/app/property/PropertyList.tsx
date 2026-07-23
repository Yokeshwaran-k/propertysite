import PropertyCard from "./PropertyCard";
import type { PropertySummary } from "@/lib/properties";
export default function PropertyList({
  properties,
  total,
}: {
  properties: PropertySummary[];
  total: number;
}) {
  if (properties.length === 0) {
    return (
      <div className="py-16 text-center text-gray-500">
        No properties match your search. Try widening your filters.
      </div>
    );
  }

  return (
    <div>
     <div className="flex flex-col gap-8">
  {properties.map((property) => (
    <PropertyCard key={property.id} property={property} />
  ))}
</div>
    </div>
  );
}