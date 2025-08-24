/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ensures Tailwind respects .dark class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",

        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",

        card: "hsl(var(--card) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
