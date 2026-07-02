import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F5",
        champagne: "#E8DCCB",
        gold: "#B68C4A",
        olive: "#273127",
        charcoal: "#222222"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(39, 49, 39, 0.10)",
        glow: "0 20px 80px rgba(182, 140, 74, 0.22)"
      },
      borderRadius: {
        luxury: "32px",
        grand: "40px"
      }
    }
  },
  plugins: []
};

export default config;
