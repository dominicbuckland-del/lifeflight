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
        "lf-yellow": "#FFB500",
        "lf-navy": "#0A365D",
        "lf-white": "#FFFFFF",
        "lf-black": "#000000",
        "lf-foundation": "#F47922",
        "lf-medical": "#62C3A5",
        "lf-training": "#04A9C7",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        mulish: ["var(--font-mulish)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
