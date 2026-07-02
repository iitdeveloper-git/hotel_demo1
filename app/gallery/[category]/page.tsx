import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { LuxuryButton } from "@/components/button";
import { gallery, galleryCategories, hotel } from "@/lib/hotel-data";
import { absoluteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return galleryCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = galleryCategories.find((item) => item.slug === slug);

  if (!category) return {};

  return {
    title: `${category.title} Gallery`,
    description: category.intro,
    alternates: { canonical: absoluteUrl(`/gallery/${category.slug}`) },
    openGraph: {
      title: `${category.title} Gallery | ${hotel.name}`,
      description: category.intro,
      url: absoluteUrl(`/gallery/${category.slug}`),
      images: [{ url: category.image, width: 1200, height: 630 }]
    }
  };
}

export default async function GalleryCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = galleryCategories.find((item) => item.slug === slug);

  if (!category) notFound();

  const startIndex = galleryCategories.findIndex((item) => item.slug === category.slug);
  const categoryImages = [
    category.image,
    ...gallery.slice(startIndex, startIndex + 5),
    ...gallery.slice(0, 2)
  ];

  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden bg-olive pt-32 text-white">
        <Image src={category.image} alt={`${category.title} gallery hero`} fill priority sizes="100vw" className="object-cover opacity-58" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/62 via-charcoal/18 to-olive/92" />
        <div className="luxury-container relative flex min-h-[72vh] flex-col justify-end pb-16">
          <Link href="/gallery" className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/24">
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
          <p className="eyebrow mb-5">Gallery Collection</p>
          <h1 className="heading-xl max-w-5xl text-balance">{category.title}</h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-white/78">{category.intro}</p>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <aside className="rounded-[36px] bg-white p-7 shadow-soft">
            <p className="eyebrow mb-4">Highlights</p>
            <div className="grid gap-3">
              {category.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-ivory p-4">
                  <Check className="h-4 w-4 text-gold" />
                  <span className="font-medium text-olive">{item}</span>
                </div>
              ))}
            </div>
            <LuxuryButton href="/book-now" className="mt-7 w-full">Plan This Stay</LuxuryButton>
          </aside>
          <div>
            <p className="eyebrow mb-4">Photo Story</p>
            <h2 className="heading-md mb-7 text-olive">A focused look at {category.title.toLowerCase()}</h2>
            <GalleryLightbox images={categoryImages} />
          </div>
        </div>
      </section>
    </main>
  );
}
