import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme palette
        bg: "#111111",
        surface: "#1E1E1E",
        "surface-2": "#252525",
        foreground: "#F5F5F5",
        muted: "#A0A0A0",
        flame: "#F97316",
        flameDark: "#EA6B0E",
        border: "#333333",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
