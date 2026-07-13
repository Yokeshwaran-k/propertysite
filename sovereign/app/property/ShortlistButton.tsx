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
  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-white transition-colors duration-300 hover:text-[#c99b2d]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 13.941 13.229"
    fill="currentColor"
    className="flex-shrink-0"
  >
    <path d="M5316.1,5737.277l1.927,4.228,4.42.394a.342.342,0,0,1,.211.584l-3.246,3.219.813,4.2a.341.341,0,0,1-.489.37l-3.946-1.981-3.947,1.966a.342.342,0,0,1-.488-.372l.813-4.176-3.247-3.223a.343.343,0,0,1,.211-.584l4.42-.394,1.927-4.228A.342.342,0,0,1,5316.1,5737.277Z" transform="translate(-5308.817 -5737.077)" />
  </svg>

  <span>
    {saved ? "Saved to Shortlist" : "Save to Shortlist"}
  </span>
</button>
  );
}