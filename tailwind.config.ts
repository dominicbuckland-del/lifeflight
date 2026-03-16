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
        navy:        "#041322",
        "navy-mid":  "#0A2540",
        "navy-light":"#0D3460",
        orange:      "#F47922",
        "orange-dark":"#D4611A",
        sky:         "#04A9C7",
        gold:        "#FFB500",
        cream:       "#FDF8F3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
