import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Send, Twitter } from "lucide-react";
import { hotel, navItems } from "@/lib/hotel-data";
import { LuxuryButton } from "./button";

export function Footer() {
  return (
    <footer className="bg-olive text-white">
      <div className="luxury-container grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="font-heading text-4xl text-gold">{hotel.name}</p>
          <p className="mt-5 max-w-sm text-white/68">{hotel.tagline}. Designed for travelers who expect privacy, beauty, and service without noise.</p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
              <Link key={index} href="#" aria-label="Social profile" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-gold">
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">Quick Links</h3>
          <div className="grid gap-3">
            {navItems.slice(1, 9).map((item) => (
              <Link key={item.href} href={item.href} className="text-white/70 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">Booking</h3>
          <div className="grid gap-3 text-white/70">
            <Link href="/book-now" className="hover:text-white">Reserve a Stay</Link>
            <Link href="/offers" className="hover:text-white">Special Packages</Link>
            <Link href="/wedding" className="hover:text-white">Wedding Desk</Link>
            <Link href="/conference" className="hover:text-white">Corporate Events</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">Stay in Touch</h3>
          <p className="mb-5 text-white/68">{hotel.address}</p>
          <div className="mb-6 flex items-start gap-3 text-white/75">
            <MapPin className="mt-1 h-4 w-4 text-gold" />
            <span>Interactive coastal map and private arrival assistance available.</span>
          </div>
          <div className="flex rounded-full bg-white p-1">
            <input aria-label="Email address" className="min-w-0 flex-1 rounded-full px-4 text-sm text-charcoal outline-none" placeholder="Email for private offers" />
            <button type="button" aria-label="Subscribe" className="grid h-11 w-11 place-items-center rounded-full bg-gold text-white">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="luxury-container flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <span>© 2026 {hotel.name}. All rights reserved.</span>
        <div className="flex flex-wrap gap-4">
          <Link href="/terms">Terms</Link>
          <Link href="/refund">Refund</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex">
        <LuxuryButton href="/book-now" className="shadow-glow">Book</LuxuryButton>
        <Link href="#top" aria-label="Back to top" className="glass grid h-12 w-12 place-items-center rounded-full text-olive">
          ↑
        </Link>
      </div>
    </footer>
  );
}
