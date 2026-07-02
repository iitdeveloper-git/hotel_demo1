"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function BookingCard({ floating = false }: { floating?: boolean }) {
  const [guests, setGuests] = useState(2);

  return (
    <form className={`${floating ? "dark-glass text-white" : "glass text-charcoal"} rounded-[32px] p-4 shadow-soft`} aria-label="Search reservations">
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_0.8fr_auto]">
        <label className="rounded-3xl bg-white/90 p-4 text-charcoal">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Check In</span>
          <input type="date" className="mt-2 w-full bg-transparent text-sm font-semibold outline-none" defaultValue="2026-08-20" />
        </label>
        <label className="rounded-3xl bg-white/90 p-4 text-charcoal">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Check Out</span>
          <input type="date" className="mt-2 w-full bg-transparent text-sm font-semibold outline-none" defaultValue="2026-08-24" />
        </label>
        <label className="rounded-3xl bg-white/90 p-4 text-charcoal">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Guests</span>
          <div className="mt-2 flex items-center justify-between">
            <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="grid h-7 w-7 place-items-center rounded-full bg-champagne">-</button>
            <span className="font-semibold">{guests}</span>
            <button type="button" onClick={() => setGuests(guests + 1)} className="grid h-7 w-7 place-items-center rounded-full bg-champagne">+</button>
          </div>
        </label>
        <button type="submit" className="group flex min-h-16 items-center justify-center gap-2 rounded-3xl bg-gold px-7 font-bold text-white transition hover:-translate-y-1 hover:bg-olive">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </form>
  );
}
