/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E74F1C",
        secondary: "#F4F4F4",
        foreground: "#1e1e1e",
        darkBg: "#0a0a0a",
      },
      fontFamily: {
        akzidenz: ["'Akzidenz'", "sans-serif"],
        cormorant: ["'Cormorant'", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
