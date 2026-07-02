import type { MetadataRoute } from "next";
import { blogPosts, galleryCategories, pageContent, policyPages } from "@/lib/hotel-data";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "dining", "spa", "gallery", "offers", "faq", "book-now", "blog"];
  const pages = [...Object.keys(pageContent), ...Object.keys(policyPages), ...staticRoutes].map((slug) => ({
    url: absoluteUrl(slug ? `/${slug}` : ""),
    lastModified: new Date("2026-07-02"),
    changeFrequency: "weekly" as const,
    priority: slug ? 0.8 : 1
  }));

  const posts = blogPosts.map((post) => ({
    url: absoluteUrl(post.href),
    lastModified: new Date("2026-07-02"),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  const galleryCategoryRoutes = galleryCategories.map((category) => ({
    url: absoluteUrl(`/gallery/${category.slug}`),
    lastModified: new Date("2026-07-02"),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...pages, ...posts, ...galleryCategoryRoutes];
}
