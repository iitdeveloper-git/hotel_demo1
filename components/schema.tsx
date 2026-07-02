import { absoluteUrl } from "@/lib/utils";
import { faqs, hotel, reviews } from "@/lib/hotel-data";

export function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: hotel.name,
      image: absoluteUrl("/og.jpg"),
      telephone: hotel.phone,
      email: hotel.email,
      address: hotel.address,
      priceRange: "₹₹₹₹",
      amenityFeature: ["Spa", "Private Beach", "Fine Dining", "Airport Pickup", "Conference Hall"].map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "1284"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: hotel.name,
      url: absoluteUrl(),
      contactPoint: { "@type": "ContactPoint", telephone: hotel.phone, contactType: "reservations" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: { "@type": "Hotel", name: hotel.name },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: reviews[0].name },
      reviewBody: reviews[0].text
    }
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
