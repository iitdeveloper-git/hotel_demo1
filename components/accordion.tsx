"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/hotel-data";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((item, index) => (
        <div key={item.q} className="overflow-hidden rounded-[28px] bg-white shadow-soft">
          <button type="button" onClick={() => setActive(active === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 p-6 text-left">
            <span className="font-heading text-2xl text-olive">{item.q}</span>
            <Plus className={cn("h-5 w-5 shrink-0 text-gold transition", active === index && "rotate-45")} />
          </button>
          <div className={cn("grid transition-all duration-300", active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
            <div className="overflow-hidden">
              <p className="px-6 pb-6 leading-8 text-charcoal/70">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
