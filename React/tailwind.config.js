/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 1s ease-in-out",
        marquee: "marquee 7s linear infinite",
        marquee2: "marquee2 12s linear infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0%) translateY(-50%)" },
          "100%": { transform: "translateX(90vw) translateY(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
