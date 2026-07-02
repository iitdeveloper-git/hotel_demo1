import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  tone?: "gold" | "light" | "dark";
  className?: string;
};

export function LuxuryButton({ href, children, tone = "gold", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
        tone === "gold" && "bg-gold text-white shadow-glow hover:-translate-y-1 hover:bg-olive",
        tone === "light" && "bg-white text-olive hover:-translate-y-1 hover:bg-champagne",
        tone === "dark" && "bg-olive text-white hover:-translate-y-1 hover:bg-charcoal",
        className
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
