import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, text, align = "left", light = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className={cn("heading-lg text-balance", light ? "text-white" : "text-olive")}>{title}</h2>
      {text ? <p className={cn("mt-5 text-lg leading-8", light ? "text-white/72" : "text-charcoal/70")}>{text}</p> : null}
    </div>
  );
}
