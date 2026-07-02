"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export function GalleryLightbox({ images }: { images: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="masonry">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(image)}
            className="group relative block h-auto w-full overflow-hidden rounded-[32px] bg-champagne text-left shadow-soft"
            aria-label={`Open gallery image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Aurum Grand luxury gallery ${index + 1}`}
              width={900}
              height={index % 3 === 0 ? 1100 : 720}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-olive/0 transition group-hover:bg-olive/20" />
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-charcoal/88 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
          <button type="button" onClick={() => setActive(null)} aria-label="Close gallery" className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white text-olive">
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-[36px]">
            <Image src={active} alt="Expanded luxury hotel gallery view" fill sizes="90vw" className="object-cover" />
          </div>
        </div>
      ) : null}
    </>
  );
}
