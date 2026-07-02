import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { suites } from "@/lib/hotel-data";
import { LuxuryButton } from "./button";

export function SuiteCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {suites.map((suite) => (
        <article key={suite.title} className="group overflow-hidden rounded-[36px] bg-white shadow-soft transition duration-500 hover:-translate-y-2">
          <div className="relative h-80 overflow-hidden">
            <Image src={suite.image} alt={suite.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gold">{suite.price} / night</div>
          </div>
          <div className="p-7">
            <h3 className="font-heading text-3xl text-olive">{suite.title}</h3>
            <p className="mt-3 text-sm leading-7 text-charcoal/68">{suite.description}</p>
            <div className="mt-5 grid gap-2">
              {suite.amenities.map((amenity) => (
                <span key={amenity} className="flex items-center gap-2 text-sm text-charcoal/72">
                  <Check className="h-4 w-4 text-gold" />
                  {amenity}
                </span>
              ))}
            </div>
            <LuxuryButton href="/suites" className="mt-7 w-full">
              View Details
            </LuxuryButton>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ReviewCard({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <article className="rounded-[32px] bg-white p-7 shadow-soft">
      <div className="mb-5 flex gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-lg leading-8 text-charcoal/76">“{text}”</p>
      <div className="mt-6 border-t border-champagne pt-5">
        <p className="font-semibold text-olive">{name}</p>
        <p className="text-sm text-charcoal/55">{role}</p>
      </div>
    </article>
  );
}

export function BlogCard({ post }: { post: { title: string; href: string; image: string; tag: string; text: string } }) {
  return (
    <Link href={post.href} className="group block overflow-hidden rounded-[32px] bg-white shadow-soft">
      <div className="relative h-64 overflow-hidden">
        <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <div className="p-7">
        <p className="eyebrow mb-3">{post.tag}</p>
        <h3 className="font-heading text-3xl leading-tight text-olive">{post.title}</h3>
        <p className="mt-4 text-sm leading-7 text-charcoal/66">{post.text}</p>
      </div>
    </Link>
  );
}
