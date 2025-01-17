/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        xs: "0.75rem", // Small text
        sm: "0.875rem", // Normal text
        base: "1rem", // Default text
        lg: "1.125rem", // Slightly larger text
        xl: "1.25rem", // Large text
        "2xl": "1.5rem", // Headings
        "3xl": "1.875rem", // Larger headings
        "4xl": "2.25rem", // Hero text
        "5xl": "3rem",
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      lineHeight: {
        tight: "1.2",
        snug: "1.3",
        normal: "1.5",
        relaxed: "1.625",
      },
    },
  },
  plugins: [],
};
