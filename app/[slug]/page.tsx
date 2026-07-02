import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AirVent,
  Bath,
  BedDouble,
  CalendarDays,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  ConciergeBell,
  Crown,
  Gift,
  Hotel,
  Instagram,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Tv,
  Users,
  WashingMachine,
  Wifi,
  Wine
} from "lucide-react";
import { BlogCard, SuiteCards } from "@/components/cards";
import { FAQAccordion } from "@/components/accordion";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { LuxuryButton } from "@/components/button";
import { SectionHeader } from "@/components/section-header";
import { blogPosts, gallery, galleryCategories, hotel, images, packages, pageContent, policyPages, reasons } from "@/lib/hotel-data";
import { absoluteUrl } from "@/lib/utils";

type PageKey = keyof typeof pageContent;
type PolicyKey = keyof typeof policyPages;

const routeTitles: Record<string, string> = {
  dining: "Dining",
  spa: "Spa & Wellness",
  gallery: "Gallery",
  offers: "Special Offers",
  faq: "FAQ",
  "book-now": "Book Now"
};

export function generateStaticParams() {
  return [
    ...Object.keys(pageContent).map((slug) => ({ slug })),
    ...Object.keys(policyPages).map((slug) => ({ slug })),
    ...Object.keys(routeTitles).map((slug) => ({ slug }))
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = pageContent[slug as PageKey];
  const policy = policyPages[slug as PolicyKey];
  const title = content?.title || policy?.title || routeTitles[slug];

  if (!title) return {};

  return {
    title,
    description: content?.intro || policy?.intro || `Explore ${title} at ${hotel.name}, a luxury oceanfront hotel designed for private coastal stays.`,
    alternates: { canonical: absoluteUrl(`/${slug}`) },
    openGraph: {
      title: `${title} | ${hotel.name}`,
      description: content?.intro || policy?.intro || hotel.tagline,
      url: absoluteUrl(`/${slug}`),
      images: [{ url: content?.image || images.hero, width: 1200, height: 630 }]
    }
  };
}

export default async function InnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "contact") return <ContactPage />;
  if (slug in pageContent) return <EditorialPage slug={slug as PageKey} />;
  if (slug in policyPages) return <PolicyPage slug={slug as PolicyKey} />;
  if (slug === "dining") return <DiningPage />;
  if (slug === "spa") return <SpaPage />;
  if (slug === "gallery") return <GalleryPage />;
  if (slug === "offers") return <OffersPage />;
  if (slug === "faq") return <FAQPage />;
  if (slug === "book-now") return <BookNowPage />;
  notFound();
}

function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-olive pt-32 text-white">
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover opacity-58" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-olive/88" />
      <div className="luxury-container relative flex min-h-[78vh] flex-col justify-end pb-16">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="heading-xl max-w-5xl text-balance">{title}</h1>
        <p className="mt-7 max-w-2xl text-xl leading-9 text-white/78">{intro}</p>
      </div>
    </section>
  );
}

function EditorialPage({ slug }: { slug: PageKey }) {
  const content = pageContent[slug];
  return (
    <main>
      <PageHero {...content} />
      <section className="section-y bg-ivory">
        <div className="luxury-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="sticky top-32 rounded-[36px] bg-white p-7 shadow-soft">
            <p className="eyebrow mb-4">At a Glance</p>
            <div className="grid gap-3">
              {content.points.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl bg-ivory p-4">
                  <Check className="h-4 w-4 text-gold" />
                  <span className="font-medium text-olive">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="The Experience" title="A richer kind of quiet, delivered with precision" text="Each detail is intentionally restrained: natural palettes, tactile materials, composed service, and spaces that let the guest feel fully hosted without ever feeling observed." />
            <div className="grid gap-5 md:grid-cols-2">
              {reasons.slice(0, 4).map((item) => (
                <article key={item.title} className="rounded-[32px] bg-white p-7 shadow-soft">
                  <item.icon className="mb-5 h-7 w-7 text-gold" />
                  <h3 className="font-heading text-3xl text-olive">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/66">{item.text}</p>
                </article>
              ))}
            </div>
            {slug === "rooms" || slug === "suites" ? (
              <div className="mt-12">
                <SuiteCards />
              </div>
            ) : null}
            {slug === "rooms" ? <RoomFacilityShowcase /> : null}
            {slug === "contact" ? <ContactBlock /> : null}
          </div>
        </div>
      </section>
    </main>
  );
}

function RoomFacilityShowcase() {
  const facilities = [
    { title: "Daily VIP Treatment", icon: Sparkles },
    { title: "Bathrooms with Shower", icon: Bath },
    { title: "49-inch Smart TV", icon: Tv },
    { title: "Daily Spa Access", icon: ConciergeBell },
    { title: "Evening Turndown", icon: ShieldCheck },
    { title: "Coffee and Tea Service", icon: Coffee },
    { title: "Air Conditioning", icon: AirVent },
    { title: "Safety Deposit Box", icon: LockKeyhole },
    { title: "Minibar Drinks", icon: Wine },
    { title: "24h Room Service", icon: ConciergeBell },
    { title: "Laundry Service", icon: WashingMachine },
    { title: "Free WiFi", icon: Wifi }
  ];

  const suiteHighlights = ["Elegant interior design", "Panoramic views", "Separate living area", "Italian linen", "Private balcony", "Marble bath"];
  const hotelServices = ["Car and bicycle rental", "Souvenir and gift desk", "Currency exchange", "Airport transfers", "Excursions available", "VIP parking"];

  return (
    <section className="mt-16">
      <div className="rounded-[40px] border border-champagne bg-white p-6 shadow-soft md:p-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow mb-3">Services of the Double Deluxe Room</p>
          <h2 className="font-heading text-5xl text-olive">Room Facilities</h2>
        </div>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <div key={facility.title} className="group border-b border-champagne pb-6 text-center">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-3xl bg-ivory text-gold transition group-hover:-translate-y-1 group-hover:bg-champagne">
                <facility.icon className="h-7 w-7" />
              </div>
              <p className="text-sm font-semibold text-charcoal/68">{facility.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <FeatureList title="Suite Highlights" items={suiteHighlights} />
        <FeatureList title="Hotel Services" items={hotelServices} />
      </div>
    </section>
  );
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[36px] border border-champagne bg-white p-8 shadow-soft">
      <h3 className="mb-6 text-center font-heading text-3xl text-olive">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <p key={item} className="flex items-center gap-3 text-sm font-medium text-charcoal/68">
            <Check className="h-4 w-4 text-gold" />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ivory pt-32">
        <div className="absolute bottom-0 right-0 top-0 hidden w-[38%] bg-olive lg:block" />
        <div className="luxury-container relative grid gap-12 py-20 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">Contact Us</p>
            <h1 className="heading-lg text-olive">Let our reservation team design your stay</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-charcoal/68">
              Share your dates, celebration plans, or corporate requirements. Aurum Grand will respond with a polished itinerary, room options, and private arrival support.
            </p>
            <div className="mt-10 grid gap-5">
              <ContactInfo icon={MapPin} label="Office" value={hotel.address} />
              <ContactInfo icon={Phone} label="Phone" value={hotel.phone} />
              <ContactInfo icon={Mail} label="Email" value={hotel.email} />
            </div>
            <div className="mt-8 flex gap-3 text-gold">
              {[Instagram, Gift, Car].map((Icon, index) => (
                <span key={index} className="grid h-11 w-11 place-items-center rounded-full bg-white shadow-soft">
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] bg-white p-6 shadow-soft md:p-9">
            <h2 className="mb-6 font-heading text-4xl text-olive">Send a message</h2>
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-charcoal/70">
                  First Name
                  <input className="rounded-2xl border border-champagne bg-ivory px-4 py-3 outline-none focus:border-gold" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-charcoal/70">
                  Last Name
                  <input className="rounded-2xl border border-champagne bg-ivory px-4 py-3 outline-none focus:border-gold" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-charcoal/70">
                Email
                <input type="email" className="rounded-2xl border border-champagne bg-ivory px-4 py-3 outline-none focus:border-gold" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal/70">
                Subject
                <input className="rounded-2xl border border-champagne bg-ivory px-4 py-3 outline-none focus:border-gold" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-charcoal/70">
                Comment or Message
                <textarea rows={5} className="resize-none rounded-2xl border border-champagne bg-ivory px-4 py-3 outline-none focus:border-gold" />
              </label>
              <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-white transition hover:bg-olive">
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow mb-4">Map</p>
            <h2 className="heading-md text-olive">Arrive at Palm Crescent Coast</h2>
            <p className="mt-5 leading-8 text-charcoal/68">The map is ready for Google Maps or Mapbox integration. Current layout includes a premium static map treatment for fast loading and easy replacement.</p>
            <LuxuryButton href="/book-now" className="mt-8">Book Arrival</LuxuryButton>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[40px] bg-olive shadow-soft">
            <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)", backgroundSize: "54px 54px" }} />
            <div className="absolute left-[18%] top-[28%] h-5 w-5 rounded-full bg-gold shadow-glow" />
            <div className="absolute left-[52%] top-[44%] h-5 w-5 rounded-full bg-white" />
            <div className="absolute left-[68%] top-[62%] h-5 w-5 rounded-full bg-gold shadow-glow" />
            <div className="absolute bottom-8 left-8 right-8 rounded-[32px] bg-white/90 p-6 backdrop-blur-xl">
              <p className="eyebrow mb-2">Aurum Grand</p>
              <h3 className="font-heading text-3xl text-olive">{hotel.address}</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactInfo({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="border-b border-champagne pb-5">
      <p className="mb-2 flex items-center gap-3 text-sm font-bold text-gold">
        <Icon className="h-4 w-4" />
        {label}
      </p>
      <p className="max-w-md text-lg leading-7 text-charcoal/74">{value}</p>
    </div>
  );
}

function DiningPage() {
  return (
    <main>
      <PageHero eyebrow="Dining" title="Seasonal dining with theatre, restraint, and a cellar worth travelling for" intro="Reserve the restaurant, chef’s counter, wine room, or a private dinner on the sand." image={images.dining} />
      <section className="section-y bg-ivory">
        <div className="luxury-container grid gap-8 lg:grid-cols-3">
          {["Restaurant", "Chef", "Menu", "Wine", "Reservations", "Private Shore Dinner"].map((item, index) => (
            <article key={item} className="rounded-[32px] bg-white p-7 shadow-soft">
              <p className="eyebrow mb-3">0{index + 1}</p>
              <h2 className="font-heading text-4xl text-olive">{item}</h2>
              <p className="mt-4 leading-8 text-charcoal/68">A polished hospitality moment with coastal ingredients, exact pacing, and a service team trained in quiet confidence.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function SpaPage() {
  return (
    <main>
      <PageHero eyebrow="Spa & Wellness" title="Wellness rituals shaped around breath, sleep, and warm stone calm" intro="Choose massage, yoga, steam, jacuzzi, recovery therapy, and bespoke wellness consultations." image={images.spa} />
      <section className="section-y bg-white">
        <div className="luxury-container grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Massage", "Yoga", "Steam", "Jacuzzi"].map((item) => (
            <article key={item} className="rounded-[32px] bg-ivory p-7 shadow-soft">
              <h2 className="font-heading text-4xl text-olive">{item}</h2>
              <p className="mt-4 leading-8 text-charcoal/68">A sensory treatment journey supported by expert therapists, warm oils, botanicals, and silent recovery spaces.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function GalleryPage() {
  return (
    <main>
      <PageHero eyebrow="Gallery" title="A visual tour through suites, water, dining, wellness, and celebration" intro="Explore a curated image story of the hotel before planning your private stay." image={images.lobby} />
      <section className="section-y bg-white">
        <div className="luxury-container">
          <SectionHeader eyebrow="Gallery Categories" title="Open the exact gallery you want" text="Choose a focused collection for suites, wellness, dining, weddings, executive retreats, or family escapes." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryCategories.map((category) => (
              <Link key={category.slug} href={`/gallery/${category.slug}`} className="group overflow-hidden rounded-[36px] bg-ivory shadow-soft transition duration-500 hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <Image src={category.image} alt={`${category.title} gallery`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive/72 to-transparent" />
                  <p className="absolute bottom-5 left-5 rounded-full bg-white/88 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-gold">Open Gallery</p>
                </div>
                <div className="p-7">
                  <h2 className="font-heading text-3xl text-olive">{category.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-charcoal/66">{category.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <SectionHeader eyebrow="Full Gallery" title="All hotel moments in one place" />
          <GalleryLightbox images={gallery} />
        </div>
      </section>
    </main>
  );
}

function OffersPage() {
  return (
    <main>
      <PageHero eyebrow="Offers" title="Packages for honeymoons, family escapes, business retreats, weekends, and festivals" intro="Every offer is built to feel personal, generous, and easy to reserve directly." image={images.pool} />
      <section className="section-y bg-ivory">
        <div className="luxury-container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[36px] bg-white shadow-soft">
              <div className="relative h-72">
                <Image src={item.image} alt={`${item.title} offer`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-7">
                <p className="eyebrow mb-3">{item.price}</p>
                <h2 className="font-heading text-4xl text-olive">{item.title}</h2>
                <p className="mt-4 leading-8 text-charcoal/68">{item.text}</p>
                <LuxuryButton href="/book-now" className="mt-6">Reserve Offer</LuxuryButton>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function FAQPage() {
  return (
    <main>
      <PageHero eyebrow="FAQ" title="Everything to know before you arrive" intro="A concise guide to bookings, butler service, events, transfers, and stay policies." image={images.hero} />
      <section className="section-y bg-ivory">
        <div className="luxury-container">
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}

function BookNowPage() {
  const calendarDays = [
    "30",
    "31",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "1",
    "2"
  ];
  const times = ["9:00 AM", "11:30 AM", "2:00 PM", "5:30 PM"];

  return (
    <main>
      <section className="bg-ivory pt-28">
        <div className="luxury-container">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-olive text-gold shadow-soft">
              <Crown className="h-7 w-7" />
            </span>
            <p className="eyebrow">Aurum Grand Reservations</p>
            <h1 className="font-heading text-5xl text-olive md:text-7xl">Book Your Stay</h1>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[40px] shadow-soft">
            <Image src={images.suite} alt="Luxury hotel suite booking" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-olive/70 via-charcoal/12 to-white/5" />
            <div className="absolute bottom-0 left-0 max-w-xl bg-white/88 p-8 backdrop-blur-xl md:p-12">
              <p className="eyebrow mb-3">Private Reservation</p>
              <h2 className="font-heading text-4xl text-olive">Reserve with our concierge</h2>
              <p className="mt-4 leading-8 text-charcoal/66">Choose your preferred arrival date, time, suite style, and guest count. Our team will confirm your tailored stay plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="luxury-container grid gap-8 lg:grid-cols-[0.45fr_1fr]">
          <aside className="rounded-[36px] bg-champagne/45 p-8 shadow-soft lg:p-10">
            <div className="mb-9">
              <p className="eyebrow mb-3">By Email</p>
              <p className="text-lg font-medium text-olive">{hotel.email}</p>
            </div>
            <div className="mb-9">
              <p className="eyebrow mb-3">By Phone</p>
              <p className="text-lg font-medium text-olive">{hotel.phone}</p>
            </div>
            <div className="mb-9">
              <p className="eyebrow mb-3">By Form</p>
              <p className="leading-8 text-charcoal/68">Use the booking calendar to request a suite consultation. If your preferred slot is full, our concierge will suggest the nearest private availability.</p>
            </div>
            <div className="mb-9">
              <p className="eyebrow mb-3">Hours</p>
              <p className="text-charcoal/72">Mon-Fri, 9am-8pm IST</p>
            </div>
            <div className="rounded-[28px] bg-white p-5">
              <p className="mb-3 flex items-center gap-2 font-heading text-2xl text-olive">
                <Hotel className="h-5 w-5 text-gold" />
                Suite Desk
              </p>
              <p className="text-sm leading-7 text-charcoal/65">Ocean suites, private villas, spa schedules, dining reservations, and airport transfers can be combined into one itinerary.</p>
            </div>
          </aside>

          <div className="rounded-[40px] bg-ivory p-5 shadow-soft md:p-8 lg:p-10">
            <div className="mb-9 grid gap-5 border-b border-champagne pb-8 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <p className="eyebrow mb-3">Luxury Stay Consultation</p>
                <h2 className="font-heading text-4xl text-olive">Aurum Grand Private Booking</h2>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-charcoal/66">
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> 45 minutes</span>
                  <span className="flex items-center gap-2"><BedDouble className="h-4 w-4 text-gold" /> Suite selection</span>
                  <span className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> Guest planning</span>
                </div>
              </div>
              <span className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-olive shadow-soft">Asia/Kolkata</span>
            </div>

            <div className="grid gap-10 xl:grid-cols-[1fr_0.42fr]">
              <div>
                <div className="mb-7 flex items-center justify-between">
                  <button type="button" aria-label="Previous month" className="grid h-11 w-11 place-items-center rounded-full bg-white text-olive shadow-soft">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h3 className="font-heading text-3xl text-olive">August 2026</h3>
                  <button type="button" aria-label="Next month" className="grid h-11 w-11 place-items-center rounded-full bg-white text-olive shadow-soft">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase tracking-[0.12em] text-charcoal/48">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-7 gap-2">
                  {calendarDays.map((day, index) => {
                    const isSelected = day === "20";
                    const isMuted = index < 2 || index > 32;
                    return (
                      <button
                        key={`${day}-${index}`}
                        type="button"
                        className={`aspect-square rounded-full text-sm font-semibold transition ${
                          isSelected
                            ? "bg-gold text-white shadow-glow"
                            : isMuted
                              ? "text-charcoal/22 hover:bg-white"
                              : "text-charcoal/72 hover:bg-white hover:text-gold"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Check In", value: "20 Aug 2026" },
                    { label: "Check Out", value: "24 Aug 2026" },
                    { label: "Guests", value: "2 Adults" }
                  ].map((item) => (
                    <label key={item.label} className="rounded-[28px] bg-white p-5 shadow-soft">
                      <span className="eyebrow">{item.label}</span>
                      <input className="mt-3 w-full bg-transparent font-semibold text-olive outline-none" defaultValue={item.value} />
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-[32px] bg-white p-6 shadow-soft">
                  <p className="eyebrow mb-3">Thursday</p>
                  <h3 className="font-heading text-3xl text-olive">August 20, 2026</h3>
                  <div className="mt-6 grid gap-3">
                    {times.map((time) => (
                      <button key={time} type="button" className="rounded-2xl border border-champagne px-5 py-4 text-sm font-semibold text-olive transition hover:border-gold hover:bg-champagne/45">
                        {time}
                      </button>
                    ))}
                  </div>
                  <button type="button" className="mt-6 w-full rounded-full bg-gold px-6 py-4 font-bold text-white shadow-glow transition hover:bg-olive">
                    Submit and Finish
                  </button>
                </div>
                <div className="mt-5 rounded-[28px] bg-olive p-6 text-white">
                  <p className="font-heading text-2xl text-gold">Direct booking benefits</p>
                  <div className="mt-4 grid gap-3 text-sm text-white/72">
                    <p className="flex gap-2"><Check className="h-4 w-4 text-gold" /> Best suite matching</p>
                    <p className="flex gap-2"><Check className="h-4 w-4 text-gold" /> Airport pickup planning</p>
                    <p className="flex gap-2"><Check className="h-4 w-4 text-gold" /> Dining and spa priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PolicyPage({ slug }: { slug: PolicyKey }) {
  const page = policyPages[slug];
  return (
    <main>
      <section className="bg-ivory pt-36">
        <div className="luxury-container max-w-4xl py-20">
          <p className="eyebrow mb-5">Guest Information</p>
          <h1 className="heading-lg text-olive">{page.title}</h1>
          <p className="mt-6 text-xl leading-9 text-charcoal/70">{page.intro}</p>
          <div className="mt-10 grid gap-4">
            {page.sections.map((section) => (
              <p key={section} className="rounded-[28px] bg-white p-6 leading-8 text-charcoal/70 shadow-soft">{section}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactBlock() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      <div className="rounded-[32px] bg-white p-7 shadow-soft">
        <h2 className="font-heading text-4xl text-olive">Speak to reservations</h2>
        <p className="mt-4 leading-8 text-charcoal/68">{hotel.phone}<br />{hotel.email}</p>
      </div>
      <div className="rounded-[32px] bg-white p-7 shadow-soft">
        <h2 className="font-heading text-4xl text-olive">Arrival address</h2>
        <p className="mt-4 leading-8 text-charcoal/68">{hotel.address}</p>
      </div>
    </div>
  );
}
