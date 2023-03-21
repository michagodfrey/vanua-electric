/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        prozaLibreBold: ["Proza Libre", "sans-serif"],
      },
      colors: {
        "forest-biome": "#184A45",
        "forest-biome-light": "#466e6a",
        "call-to-action": "#DA392B",
        "call-to-action-hover": "#e36a5f",
        "logo-color": "#87c0cd",
      },
      backgroundImage: {
        "banner-img": "url('images/savusavu-bay.webp')",
      },
      animation: {
        kenburnsBottom: "kenburnsBottom 5s linear 1s both",
        fadeIn: "fadeIn 5s linear 1s both",
      },
      keyframes: {
        kenburnsBottom: {
          "0%": {
            transform: "scale(1) translateY(0)",
            origin: "50% 84%",
          },
          "100%": {
            transform: "scale(1.125) translateY(15px)",
            origin: "bottom",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
