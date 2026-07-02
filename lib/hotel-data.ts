import {
  Award,
  Baby,
  Bath,
  BriefcaseBusiness,
  Building2,
  Car,
  ChefHat,
  Dumbbell,
  GlassWater,
  Heart,
  Landmark,
  Martini,
  Palmtree,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  SunMedium,
  Utensils,
  Waves
} from "lucide-react";

export const hotel = {
  name: "Aurum Grand",
  tagline: "An oceanfront sanctuary for timeless stays",
  phone: "+91 98765 43210",
  email: "reservations@aurumgrand.com",
  address: "Palm Crescent Coast, Goa 403515, India",
  coordinates: { lat: 15.4989, lng: 73.8278 }
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Suites", href: "/suites" },
  { label: "Dining", href: "/dining" },
  { label: "Spa", href: "/spa" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/offers" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" }
];

export const images = {
  hero: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=85",
  lobby: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85",
  suite: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=85",
  pool: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=85",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
  beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=85",
  conference: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=85",
  bar: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1800&q=85",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1800&q=85"
};

export const galleryCategories = [
  {
    title: "Ocean View Suites",
    slug: "ocean-view-suites",
    image: images.suite,
    intro: "Suite photography focused on ocean-facing bedrooms, terraces, marble baths, and soft sunrise interiors.",
    highlights: ["Private balconies", "Ocean baths", "Butler setup", "Sunrise views"]
  },
  {
    title: "Wellness Residences",
    slug: "wellness-residences",
    image: images.spa,
    intro: "A calm wellness gallery for spa suites, yoga spaces, steam rituals, jacuzzi moments, and recovery lounges.",
    highlights: ["Spa suites", "Yoga deck", "Steam rooms", "Jacuzzi rituals"]
  },
  {
    title: "Private Dining",
    slug: "private-dining",
    image: images.dining,
    intro: "Dining visuals for chef's table evenings, candlelit terraces, wine pairings, and private celebration menus.",
    highlights: ["Chef's table", "Wine cellar", "Beach dinner", "Tasting menus"]
  },
  {
    title: "Beach Weddings",
    slug: "beach-weddings",
    image: images.wedding,
    intro: "A wedding gallery with beach ceremonies, floral settings, golden-hour portraits, and reception moments.",
    highlights: ["Beach ceremony", "Floral atelier", "Reception lawns", "Bridal suite"]
  },
  {
    title: "Executive Retreats",
    slug: "executive-retreats",
    image: images.conference,
    intro: "Corporate event visuals for boardrooms, breakout lawns, private dining rooms, and leadership retreats.",
    highlights: ["Boardrooms", "Breakout lawns", "Hybrid setup", "Executive dining"]
  },
  {
    title: "Family Escapes",
    slug: "family-escapes",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
    intro: "Family stay imagery with connecting rooms, beach picnics, kids club details, and relaxed resort days.",
    highlights: ["Connecting rooms", "Kids club", "Beach picnic", "Family portraits"]
  }
];

export const suites = [
  {
    title: "Royal Ocean Suite",
    price: "₹48,000",
    image: images.suite,
    amenities: ["Private terrace", "Ocean bath", "Butler pantry"],
    description: "A cinematic residence with sunrise views, linen-draped calm, and a hand-finished marble bath."
  },
  {
    title: "Presidential Palm Villa",
    price: "₹92,000",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=85",
    amenities: ["Plunge pool", "Private chef", "Garden deck"],
    description: "A secluded villa with indoor-outdoor living, curated art, and a dining pavilion for twelve."
  },
  {
    title: "Champagne Club Room",
    price: "₹28,500",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1800&q=85",
    amenities: ["Club lounge", "Rain shower", "Work alcove"],
    description: "A quiet, beautifully proportioned room for design-conscious guests who value privacy and pace."
  }
];

export const experiences = [
  { title: "Spa", icon: Sparkles, image: images.spa, text: "Rituals shaped around aromatherapy, silence, and restorative touch." },
  { title: "Infinity Pool", icon: Waves, image: images.pool, text: "A horizon-edge pool with daybeds, chilled towels, and sunset service." },
  { title: "Private Beach", icon: Palmtree, image: images.beach, text: "Soft sand, reserved cabanas, moonlit bonfires, and discreet attendants." },
  { title: "Fine Dining", icon: Utensils, image: images.dining, text: "Seasonal tasting menus built from coastal produce and global technique." },
  { title: "Luxury Bar", icon: Martini, image: images.bar, text: "Rare spirits, champagne rituals, and a terrace made for late evenings." },
  { title: "Conference Hall", icon: Building2, image: images.conference, text: "Boardroom precision with resort ease, hybrid-ready and beautifully hosted." },
  { title: "Wedding", icon: Heart, image: images.wedding, text: "Ceremonies with floral ateliers, private menus, and coastal grandeur." },
  { title: "Gym", icon: Dumbbell, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85", text: "Technogym training, sunrise runs, and personal performance coaching." },
  { title: "Kids Club", icon: Baby, image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=85", text: "Creative workshops, gentle supervision, and considered family comfort." }
];

export const reasons = [
  { title: "Premium Service", icon: ShieldCheck, text: "Every stay is choreographed by a private guest relations team." },
  { title: "24x7 Concierge", icon: Star, text: "Tables, transfers, surprises, and rare requests handled at any hour." },
  { title: "Airport Pickup", icon: Plane, text: "Luxury arrivals with chilled refreshments and direct suite check-in." },
  { title: "Private Butler", icon: Bath, text: "Unpacking, wardrobe care, bath rituals, and evening turndown." },
  { title: "Ocean View", icon: SunMedium, text: "Layered terraces and suites aligned to the coast and morning light." },
  { title: "Award Winning", icon: Award, text: "Recognized for design, wellness, service, and destination dining." }
];

export const gallery = [
  images.hero,
  images.lobby,
  images.suite,
  images.pool,
  images.dining,
  images.spa,
  images.beach,
  images.wedding,
  images.conference,
  images.bar,
  images.chef,
  "https://images.unsplash.com/photo-1559599238-308793637427?auto=format&fit=crop&w=1800&q=85"
];

export const packages = [
  { title: "Honeymoon", image: images.wedding, price: "from ₹78,000", text: "A rose-gold arrival, candlelit shore dinner, couples spa, and late checkout." },
  { title: "Family", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85", price: "from ₹52,000", text: "Connecting rooms, kids club credits, beach picnic, and family portrait session." },
  { title: "Business", image: images.conference, price: "from ₹64,000", text: "Executive suite, boardroom hours, airport transfers, and private dining." },
  { title: "Weekend", image: images.pool, price: "from ₹42,000", text: "Two-night coastal reset with breakfast, spa credit, and champagne sundown." },
  { title: "Festival", image: images.lobby, price: "from ₹58,000", text: "Celebratory menus, cultural evenings, gifting amenities, and family hosting." }
];

export const reviews = [
  { name: "Anika Mehra", role: "Founder, Maison Forma", text: "The service felt almost telepathic. Every room, scent, and meal had intention.", rating: 5 },
  { name: "Rafael Costa", role: "Film Producer", text: "Aurum Grand has the visual calm of an Aman property with the warmth of a private home.", rating: 5 },
  { name: "Priya Shah", role: "Luxury Travel Advisor", text: "My clients notice the details here: linen, light, pacing, silence, and ceremony.", rating: 5 }
];

export const attractions = [
  { title: "Old Quarter Art Walk", distance: "18 min", icon: Landmark, text: "Heritage villas, galleries, and private craft studios." },
  { title: "Marina Champagne Cruise", distance: "12 min", icon: GlassWater, text: "A hosted sunset sail with canapes and live acoustic music." },
  { title: "Spice Estate Lunch", distance: "36 min", icon: ChefHat, text: "Chef-led market visit followed by a long table garden lunch." },
  { title: "Airport", distance: "34 min", icon: Car, text: "Private sedan and limousine transfers on request." }
];

export const faqs = [
  { q: "Can I book private experiences before arrival?", a: "Yes. Our concierge can reserve yacht charters, chefs table dinners, spa rituals, floral styling, and airport transfers as soon as your stay is confirmed." },
  { q: "Do suites include butler service?", a: "Signature suites and villas include dedicated butler service. Club rooms include priority concierge, unpacking on request, and evening turndown." },
  { q: "Is the hotel suitable for weddings and executive retreats?", a: "Yes. Aurum Grand hosts intimate ceremonies, destination weddings, board meetings, leadership retreats, and private brand events with full planning support." },
  { q: "What is the cancellation policy?", a: "Flexible and seasonal rates are available. Most direct bookings can be adjusted up to seven days before arrival, while special packages may have unique terms." }
];

export const blogPosts = [
  { title: "How to Design a Perfect Coastal Weekend", href: "/blog/coastal-weekend", image: images.beach, tag: "Travel", text: "A refined guide to pacing, packing, dining, and reserving the best hours by the water." },
  { title: "Inside the New Language of Luxury Wellness", href: "/blog/luxury-wellness", image: images.spa, tag: "Wellness", text: "Why modern spa journeys are becoming quieter, more personal, and deeply restorative." },
  { title: "What Makes a Destination Wedding Feel Effortless", href: "/blog/destination-wedding", image: images.wedding, tag: "Events", text: "The hidden hospitality systems behind beautiful celebrations that guests remember." }
];

export const pageContent = {
  about: {
    title: "A Private World of Coastal Elegance",
    eyebrow: "About Aurum Grand",
    image: images.lobby,
    intro: "Aurum Grand was created for guests who read spaces as carefully as they read service. The hotel brings together oceanfront architecture, polished hospitality, and a slower rhythm of luxury.",
    points: ["68 suites and villas", "Private beach club", "Three restaurants and two bars", "Wellness atelier", "Event lawns and grand ballroom"]
  },
  rooms: {
    title: "Rooms Made for Quiet Arrival",
    eyebrow: "Rooms",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1800&q=85",
    intro: "Every room is layered with natural textures, warm lighting, deep sleep rituals, and intuitive technology that stays elegantly out of sight.",
    points: ["Ocean and garden views", "Italian linen", "Marble bathrooms", "Smart climate control", "Curated minibar"]
  },
  suites: {
    title: "Suites with Residence-Level Privacy",
    eyebrow: "Suites",
    image: images.suite,
    intro: "Generous terraces, sculptural baths, private dining settings, and butler service give each suite the confidence of a personal coastal residence.",
    points: ["Private terraces", "Butler service", "Dining salons", "Immersive baths", "Priority reservations"]
  },
  events: {
    title: "Events with Cinematic Precision",
    eyebrow: "Events",
    image: images.conference,
    intro: "From leadership retreats to brand launches, Aurum Grand pairs technical reliability with warm, theatre-like hospitality.",
    points: ["Hybrid-ready halls", "Private dining", "Stage and lighting", "Executive lounges", "Event concierge"]
  },
  wedding: {
    title: "Weddings Written in Gold Light",
    eyebrow: "Weddings",
    image: images.wedding,
    intro: "Exchange vows beside the sea, dine beneath palms, and host guests in a resort designed for beautiful transitions.",
    points: ["Beach ceremonies", "Floral atelier", "Bridal spa", "Custom menus", "Guest stay management"]
  },
  conference: {
    title: "Boardrooms that Breathe",
    eyebrow: "Conference",
    image: images.conference,
    intro: "A composed setting for serious work, with daylight rooms, precision AV, hosted breaks, and resort-level recovery after hours.",
    points: ["Up to 420 guests", "Boardroom suites", "Breakout lawns", "Private airport desk", "Executive dining"]
  },
  careers: {
    title: "Join the Art of Considered Hospitality",
    eyebrow: "Careers",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85",
    intro: "We hire people with taste, care, and composure. At Aurum Grand, hospitality is taught as both craft and culture.",
    points: ["Guest relations", "Culinary", "Wellness", "Design operations", "Events"]
  },
  contact: {
    title: "Begin Your Stay",
    eyebrow: "Contact",
    image: images.hero,
    intro: "Our reservations team can shape a stay, celebration, or executive retreat around your dates and preferences.",
    points: [hotel.phone, hotel.email, hotel.address, "Private viewings available", "Corporate and wedding desks"]
  }
};

export const policyPages = {
  privacy: {
    title: "Privacy Policy",
    intro: "Aurum Grand protects guest information with the same discretion we bring to service.",
    sections: ["We collect only information required for reservations, personalization, guest safety, and legal compliance.", "Guest preferences may be used to improve future stays and can be updated or removed on request.", "Payment data is processed through secure providers and is not stored in plain text by the hotel."]
  },
  terms: {
    title: "Terms of Stay",
    intro: "These terms keep bookings transparent, fair, and easy to understand.",
    sections: ["Rates vary by season, availability, and package inclusions.", "Guests are responsible for accurate booking details, identification, and respecting hotel policies.", "Special events, villas, and long stays may require deposits or separate agreements."]
  },
  refund: {
    title: "Refund Policy",
    intro: "Refunds depend on the selected rate, stay dates, and package terms.",
    sections: ["Flexible reservations can usually be changed or cancelled within the stated window on the confirmation.", "Promotional, festival, and event-linked rates may be partially or fully non-refundable.", "Approved refunds are returned to the original payment method after processing by banking partners."]
  },
  cookies: {
    title: "Cookie Policy",
    intro: "Cookies help us remember preferences and improve the booking journey.",
    sections: ["Essential cookies support security, forms, and booking availability.", "Analytics cookies help us understand site performance without selling personal data.", "Marketing cookies may be used only where consent is provided and can be adjusted any time."]
  }
};
