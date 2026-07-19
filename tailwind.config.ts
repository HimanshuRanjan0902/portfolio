import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#07070c",
          900: "#0b0c14",
          800: "#12131d",
        },
        paper: {
          50: "#fbfbfe",
          100: "#f3f4fa",
        },
        aurora: {
          indigo: "#6c63f6",
          violet: "#9b6bf3",
          cyan: "#3fd7d0",
          rose: "#f6739b",
        },
      },
      borderRadius: {
        "4xl": "24px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(12, 10, 30, 0.25)",
        glow: "0 0 40px -8px rgba(108, 99, 246, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.08)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.96)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        aurora: "aurora 22s ease-in-out infinite",
        "aurora-slow": "aurora 30s ease-in-out infinite reverse",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
