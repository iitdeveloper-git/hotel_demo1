import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Map, Play, Quote } from "lucide-react";
import { BookingCard } from "@/components/booking-card";
import { BlogCard, ReviewCard, SuiteCards } from "@/components/cards";
import { FAQAccordion } from "@/components/accordion";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { LuxuryButton } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { attractions, blogPosts, experiences, gallery, hotel, images, packages, reasons, reviews } from "@/lib/hotel-data";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-charcoal text-white">
        <video className="absolute inset-0 h-full w-full object-cover opacity-60" autoPlay muted loop playsInline poster={images.hero}>
          <source src="https://cdn.coverr.co/videos/coverr-hotel-entrance-1804/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-charcoal/70" />
        <div className="luxury-container relative flex min-h-screen flex-col justify-end pb-10 pt-32">
          <Reveal>
            <p className="eyebrow mb-5">Oceanfront hotel · Private beach · Award-winning service</p>
            <h1 className="heading-xl max-w-5xl text-balance">Experience Timeless Luxury</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/78">
              A cinematic coastal sanctuary where suites open to gold light, dining becomes ceremony, and every arrival is composed with rare discretion.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <LuxuryButton href="/book-now">Book Now</LuxuryButton>
              <LuxuryButton href="/suites" tone="light">Explore Suites</LuxuryButton>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.35fr] lg:items-end">
            <BookingCard floating />
            <Link href="#suites" className="dark-glass flex items-center justify-between rounded-[32px] p-5 text-white">
              <span className="text-sm font-semibold">Scroll to discover</span>
              <ChevronDown className="h-5 w-5 animate-bounce text-gold" />
            </Link>
          </div>
        </div>
      </section>

      <section id="suites" className="section-y bg-ivory">
        <div className="luxury-container">
          <Reveal>
            <SectionHeader eyebrow="Featured Suites" title="Residences with the stillness of a private estate" text="Choose from deeply considered rooms, signature suites, and villas shaped by ocean air, natural stone, and quiet service." />
          </Reveal>
          <SuiteCards />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <Reveal>
            <SectionHeader eyebrow="Hotel Experience" title="Every hour has its own atmosphere" text="From spa silence to champagne evenings, the hotel is designed as a complete rhythm of leisure, celebration, work, and restoration." />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="group relative min-h-96 overflow-hidden rounded-[36px] bg-olive p-7 text-white shadow-soft">
                  <Image src={item.image} alt={`${item.title} at ${hotel.name}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover opacity-58 transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive via-olive/28 to-transparent" />
                  <div className="relative flex h-full min-h-80 flex-col justify-end">
                    <item.icon className="mb-5 h-8 w-8 text-gold" />
                    <h3 className="font-heading text-3xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/76">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-champagne/45">
        <div className="luxury-container">
          <SectionHeader eyebrow="Why Choose Us" title="Hospitality measured in anticipation" align="center" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <article key={item.title} className="rounded-[32px] bg-white p-7 shadow-soft transition hover:-translate-y-1">
                <item.icon className="mb-6 h-8 w-8 text-gold" />
                <h3 className="font-heading text-3xl text-olive">{item.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/66">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <SectionHeader eyebrow="Rooms Gallery" title="Spaces composed for light, texture, and pause" text="Open the gallery for a closer look at the suites, lobby, beach club, spa, dining room, and event spaces." />
          <GalleryLightbox images={gallery} />
        </div>
      </section>

      <section className="section-y bg-olive text-white">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Luxury Dining</p>
            <h2 className="heading-lg">A restaurant that treats every dinner like a private premiere</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">The chef’s coastal menu moves from flame-grilled seafood to quiet vegetarian tasting courses, paired with a cellar of old-world icons and new-world discoveries.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Restaurant", "Chef", "Menu", "Wine", "Reservations"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/78">{item}</span>
              ))}
            </div>
            <LuxuryButton href="/dining" className="mt-9">Reserve Dining</LuxuryButton>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {[images.dining, images.chef].map((image, index) => (
              <div key={image} className={`relative overflow-hidden rounded-[36px] ${index === 0 ? "h-[520px]" : "h-[420px] md:mt-16"}`}>
                <Image src={image} alt="Luxury dining at Aurum Grand" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative h-[620px] overflow-hidden rounded-[40px]">
            <Image src={images.spa} alt="Spa and wellness suite" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Spa & Wellness" title="Rituals that return the body to quiet" text="Massage, yoga, steam, and jacuzzi journeys are tailored through a wellness consultation and finished with herbal infusions in a silent garden lounge." />
            <div className="grid grid-cols-2 gap-3">
              {["Massage", "Yoga", "Steam", "Jacuzzi"].map((item) => (
                <span key={item} className="rounded-full bg-ivory px-5 py-4 text-center font-semibold text-olive">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <SectionHeader eyebrow="Special Packages" title="Offers designed around the reason you came" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {packages.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[32px] bg-white shadow-soft">
                <div className="relative h-56">
                  <Image src={item.image} alt={`${item.title} package`} fill sizes="(min-width: 1024px) 20vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-2xl text-olive">{item.title}</h3>
                  <p className="mt-1 text-sm font-bold text-gold">{item.price}</p>
                  <p className="mt-3 text-sm leading-6 text-charcoal/65">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <SectionHeader eyebrow="Guest Reviews" title="Trusted by guests who know the difference" align="center" />
          <div className="grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => <ReviewCard key={review.name} {...review} />)}
          </div>
          <div className="mt-8 grid gap-5 rounded-[36px] bg-olive p-5 text-white shadow-soft lg:grid-cols-[0.45fr_1fr] lg:items-center">
            <div className="grid aspect-video place-items-center rounded-[28px] bg-white/10">
              <Play className="h-12 w-12 fill-gold text-gold" />
            </div>
            <div className="p-3">
              <Quote className="mb-4 h-8 w-8 text-gold" />
              <p className="text-2xl font-light leading-10">Video reviews and Google review highlights are ready for CMS integration, with structured review markup already present for rich snippets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-champagne/45">
        <div className="luxury-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader eyebrow="Nearby Attractions" title="The coast, curated" text="Guests can explore the best of the destination through private guides, hosted itineraries, and seamless transfers." />
            <div className="grid gap-3">
              {attractions.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-[28px] bg-white p-5 shadow-soft">
                  <item.icon className="h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-semibold text-olive">{item.title} · {item.distance}</h3>
                    <p className="mt-1 text-sm text-charcoal/64">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[40px] bg-olive p-8 text-white shadow-soft">
            <Map className="absolute right-8 top-8 h-10 w-10 text-gold" />
            <div className="absolute inset-8 rounded-[32px] border border-white/10" />
            <div className="absolute left-[18%] top-[24%] h-4 w-4 rounded-full bg-gold shadow-glow" />
            <div className="absolute left-[58%] top-[36%] h-4 w-4 rounded-full bg-white" />
            <div className="absolute left-[42%] top-[66%] h-4 w-4 rounded-full bg-gold shadow-glow" />
            <div className="absolute bottom-8 left-8 max-w-sm">
              <p className="eyebrow">Interactive Map</p>
              <h3 className="mt-3 font-heading text-4xl">A private map experience for transfers, attractions, and guest itineraries.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <SectionHeader eyebrow="FAQ" title="Questions before arrival" align="center" />
          <FAQAccordion />
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container">
          <SectionHeader eyebrow="Luxury Blog" title="Editorial notes for modern luxury travel" />
          <div className="grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => <BlogCard key={post.title} post={post} />)}
          </div>
        </div>
      </section>

      <section className="bg-olive py-20 text-white">
        <div className="luxury-container rounded-[40px] bg-white p-8 text-charcoal shadow-soft md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2 className="mt-4 font-heading text-5xl text-olive">Receive private invitations, seasonal packages, and chef’s table releases.</h2>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input className="min-h-14 flex-1 rounded-full border border-champagne bg-ivory px-5 outline-none focus:border-gold" placeholder="Your email address" aria-label="Email address" />
              <button className="rounded-full bg-gold px-7 py-4 font-bold text-white transition hover:bg-olive" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <SectionHeader eyebrow="Instagram Gallery" title="@aurumgrand moments" align="center" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
            {gallery.slice(0, 6).map((image, index) => (
              <div key={image} className="relative aspect-square overflow-hidden rounded-[28px]">
                <Image src={image} alt={`Instagram moment ${index + 1}`} fill sizes="16vw" className="object-cover transition duration-700 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
