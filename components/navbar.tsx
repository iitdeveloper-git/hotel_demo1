"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { galleryCategories, hotel, navItems } from "@/lib/hotel-data";
import { cn } from "@/lib/utils";
import { LuxuryButton } from "./button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 text-charcoal">
        <Link href="/" className="flex items-center gap-3" aria-label={`${hotel.name} home`}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-olive font-heading text-lg text-gold">A</span>
          <span className="font-heading text-xl text-olive">{hotel.name}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, 8).map((item) =>
            item.href === "/gallery" ? (
              <div key={item.href} className="group/gallery relative">
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/70",
                    pathname.startsWith("/gallery") && "bg-white text-gold shadow-sm"
                  )}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-1/2 top-12 grid w-[720px] -translate-x-1/2 grid-cols-3 gap-3 rounded-[32px] border border-white/50 bg-white/92 p-4 opacity-0 shadow-soft backdrop-blur-2xl transition group-hover/gallery:visible group-hover/gallery:opacity-100">
                  {galleryCategories.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/gallery/${item.slug}`}
                      className="rounded-3xl bg-ivory px-5 py-4 text-sm font-semibold text-olive transition hover:bg-champagne"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/70",
                  pathname === item.href && "bg-white text-gold shadow-sm"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/faq" className="text-sm font-semibold text-charcoal/70 transition hover:text-gold">
            FAQ
          </Link>
          <LuxuryButton href="/book-now" className="px-5 py-2.5">
            Book Now
          </LuxuryButton>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full bg-olive text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <div className="glass mx-auto mt-3 grid max-w-7xl gap-2 rounded-[32px] p-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-semibold text-olive hover:bg-white">
                {item.label}
              </Link>
              {item.href === "/gallery" ? (
                <div className="ml-4 grid gap-1 pb-2">
                  {galleryCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/gallery/${category.slug}`}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-2 text-sm font-medium text-charcoal/70 hover:bg-white hover:text-gold"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <LuxuryButton href="/book-now" className="mt-2 w-full">
            Book Now
          </LuxuryButton>
        </div>
      ) : null}
    </header>
  );
}
