/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    height: {
      banner: "400px",
    },
    extend: {
      colors: {
        "storm-gray": "#B0B8B4",
        "forest-biome": "#184A45",
        "living-coral": "#FC766A",
        "logo-color": "#87c0cd",
      },
      backgroundImage: {
        "banner-img": "url('images/savusavu-bay-scaled.jpg')",
      },
      animation: {
        kenburnsBottom: "kenburnsBottom 5s linear 1.5s both",
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
      },
    },
  },
  plugins: [],
};
