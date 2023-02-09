/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/public/*.{html,js}"],
  theme: {
    height: {
      banner: "400px",
    },
    extend: {
      backgroundImage: {
        "banner-img": "url(images/banner.jpg)",
      },
    },
  },
  plugins: [],
};
