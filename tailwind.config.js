/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "phone-mini": "250px",
      "phone-xs": "320px",
      "phone-sm": "375px",
      "phone-des": "390px",
      "phone-md": "400px",
      "phone-wide": "425px",
      "phone-lg": "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "desktop-med": "1350px",
      "desktop-wide": "1440px",
      "2xl": "1536px",
      "3xl": "1700px",
    },
    extend: {
      fontFamily: {
        neo: ["var(--font-neo-sans)", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        pry: {
          100: "#FFFBEF",
          DEFAULT: "#FFCA22",
        },
        customGray: "#F7F7F7",
        sec: {
          DEFAULT: "#241D05",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".max-w-unset": {
          "max-width": "unset",
        },
        ".max-h-unset": {
          "max-height": "unset",
        },
        ".h-unset": {
          height: "unset",
        },
        ".w-unset": {
          width: "unset",
        },
        ".center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".btwn": {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
        },
        ".end": {
          display: "flex",
          "justify-content": "flex-end",
          "align-items": "center",
        },
        ".start": {
          display: "flex",
          "align-items": "center",
        },
      });
    }),
  ],
};
