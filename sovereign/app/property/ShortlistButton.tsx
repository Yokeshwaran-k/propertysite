"use client";

import { useState } from "react";

export default function ShortlistButton({ propertyId }: { propertyId: number }) {
  const [saved, setSaved] = useState(false);

  // NOTE: this only toggles local UI state. To persist shortlists across
  // visits/sessions you'll need an API route + storage (DB table or cookie)
  // keyed on propertyId — happy to wire that up if you want it.
  return (
    <button
      type="button"
      onClick={() => setSaved((s) => !s)}
      aria-pressed={saved}
      data-property-id={propertyId}
      className={`flex items-center gap-2 rounded-sm border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
        saved
          ? "border-amber-700 bg-amber-700 text-white"
          : "border-gray-300 text-gray-700 hover:border-amber-700 hover:text-amber-700"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 13.941 13.229" fill="currentColor">
        <path d="M5316.1,5737.277l1.927,4.228,4.42.394a.342.342,0,0,1,.211.584l-3.246,3.219.813,4.2a.341.341,0,0,1-.489.37l-3.946-1.981-3.947,1.966a.342.342,0,0,1-.488-.372l.813-4.176-3.247-3.223a.343.343,0,0,1,.211-.584l4.42-.394,1.927-4.228A.342.342,0,0,1,5316.1,5737.277Z" transform="translate(-5308.817 -5737.077)" />
      </svg>
      {saved ? "Saved to shortlist" : "Save to shortlist"}
    </button>
  );
}