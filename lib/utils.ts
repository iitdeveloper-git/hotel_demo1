import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = "https://aurum-grand.example.com";

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}
