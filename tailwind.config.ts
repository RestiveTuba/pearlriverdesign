import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:        "var(--navy)",
        charcoal:    "var(--charcoal)",
        "warm-gray": "var(--warm-gray)",
        muted:       "var(--muted)",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono:    ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        none:    "0px",
        sm:      "2px",
        DEFAULT: "2px",
        md:      "2px",
        lg:      "2px",
        xl:      "2px",
        "2xl":   "2px",
        full:    "9999px",
      },
      letterSpacing: {
        tightest: "-0.02em",
        widest:   "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
