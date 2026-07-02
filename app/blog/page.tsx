import type { Metadata } from "next";
import { BlogCard } from "@/components/cards";
import { SectionHeader } from "@/components/section-header";
import { blogPosts } from "@/lib/hotel-data";

export const metadata: Metadata = {
  title: "Luxury Blog",
  description: "Editorial guides for luxury coastal travel, wellness, destination weddings, fine dining, and private hotel experiences."
};

export default function BlogIndexPage() {
  return (
    <main>
      <section className="bg-ivory pt-36">
        <div className="luxury-container py-20">
          <SectionHeader eyebrow="Luxury Blog" title="Stories for guests who travel with taste and intention" text="SEO-optimized editorial content designed for AI search, voice search, internal linking, and hospitality discovery journeys." />
          <div className="grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => <BlogCard key={post.title} post={post} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
