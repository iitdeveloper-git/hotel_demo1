import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-4 text-center">
      <div>
        <p className="eyebrow mb-4">404</p>
        <h1 className="heading-lg text-olive">This corridor is private</h1>
        <p className="mx-auto mt-5 max-w-xl text-charcoal/68">The page you requested is unavailable. Return to the hotel experience or begin a new reservation.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-gold px-7 py-4 font-bold text-white">Return Home</Link>
      </div>
    </main>
  );
}
