import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/hotel-data";
import { absoluteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.href.split("/").pop() }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.href.endsWith(slug));
  if (!post) return {};
  return {
    title: post.title,
    description: post.text,
    alternates: { canonical: absoluteUrl(post.href) },
    openGraph: { title: post.title, description: post.text, images: [{ url: post.image, width: 1200, height: 630 }] }
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.href.endsWith(slug));
  if (!post) notFound();

  return (
    <main>
      <article className="bg-ivory pt-32">
        <div className="luxury-container max-w-4xl py-16">
          <p className="eyebrow mb-5">{post.tag}</p>
          <h1 className="heading-lg text-olive">{post.title}</h1>
          <p className="mt-6 text-xl leading-9 text-charcoal/70">{post.text}</p>
          <div className="relative my-10 h-[520px] overflow-hidden rounded-[40px]">
            <Image src={post.image} alt={post.title} fill priority sizes="(min-width: 1024px) 900px, 100vw" className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-charcoal/75">
            <p>
              Luxury travel is no longer about excess. The best stays are defined by clarity: a room that lets you sleep deeply, service that arrives before it is requested, food that feels connected to place, and spaces that make time feel more generous.
            </p>
            <p>
              At Aurum Grand, every itinerary is built around rhythm. Morning light belongs to the water, afternoons to wellness and private exploration, and evenings to dining rooms, terraces, and conversations that do not need to hurry.
            </p>
            <p>
              Guests planning a refined escape should reserve signature experiences early: the spa suite, chef’s counter, beach dinner, and airport arrival service are the moments that transform a beautiful booking into a memorable stay.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
