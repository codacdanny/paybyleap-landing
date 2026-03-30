import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    colors: {
      primary: "#9A0000",
      secondary: "#F6C03A",
      error: "#EB5757",
      success: "#009A49",
      warning: "#E2B93B",
      "primary-dark": "#6C0505",
      "grey-10": "#E5E5E5",
      "grey-20": "#CCCCCC",
      "grey-30": "#B3B3B3",
      "grey-40": "#999999",
      "grey-50": "#808080",
      "grey-60": "#666666",
      "grey-70": "#4D4D4D",
      "grey-80": "#333333",
      "grey-90": "#1A1A1A",
      "grey-100": "#000000",
      "off-white": "#FBF7FB",
      "off-white-2": "#FcF7FB",
      "less-white": "#FAFAFA",
      white: "#fff",
      disabled: "#ccc",
      transparent: "transparent",
    },
    fontFamily: {
      spartan: "'League Spartan', sans-serif",
    },
    extend: {
      colors: {
        peach: {
          DEFAULT: "#FEF3E8",
          dark: "#FFE4D4",
          bar: "#FFF0E6",
        },
        cream: "#FFF9E5",
        "cream-soft": "#FBF7E8",
        navy: "#1a2744",
        "hero-dark": "#0d0d0d",
      },
      backgroundImage: {
        "page-gradient":
          "linear-gradient(180deg, #FFF8F5 0%, #FFFFFF 45%, #FFFFFF 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "input-custom": "0 0 0 1px #6C0505",
        soft: "0 24px 40px -12px rgba(0, 0, 0, 0.08)",
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.12)",
      },
      fontSize: {
        "heading-1": [
          "64px",
          {
            lineHeight: "72px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],

        "heading-2": [
          "56px",
          {
            lineHeight: "64px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],

        "heading-3": [
          "48px",
          {
            lineHeight: "56px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],

        "heading-4": [
          "40px",
          {
            lineHeight: "48px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],

        "heading-5": [
          "32px",
          {
            lineHeight: "40px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],

        "heading-6": [
          "24px",
          {
            lineHeight: "28px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],
        "heading-7": [
          "20px",
          {
            lineHeight: "24px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],
        "title-1": [
          "16px",
          {
            lineHeight: "20px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],
        "title-2": [
          "14px",
          {
            lineHeight: "16px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "600",
          },
        ],
        "button-lg": [
          "16px",
          {
            lineHeight: "24px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "500",
          },
        ],
        "button-md": [
          "14px",
          {
            lineHeight: "20px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "500",
          },
        ],
        "button-text": [
          "12px",
          {
            lineHeight: "16px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "500",
          },
        ],
        "body-1": [
          "24px",
          {
            lineHeight: "28px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "400",
          },
        ],
        "body-2": [
          "20px",
          {
            lineHeight: "28px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "400",
          },
        ],
        "body-3": [
          "18px",
          {
            lineHeight: "28px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "400",
          },
        ],
        "body-4": [
          "16px",
          {
            lineHeight: "24px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "400",
          },
        ],
        "body-5": [
          "14px",
          {
            lineHeight: "20px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "400",
          },
        ],
        "body-6": [
          "12px",
          {
            lineHeight: "18px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "400",
          },
        ],
        caption: [
          "10px",
          {
            lineHeight: "16px",
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [scrollbarHide],
};
