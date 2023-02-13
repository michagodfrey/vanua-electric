/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    height: {
      banner: "400px",
    },
    extend: {
      backgroundImage: {
        "banner-img": "url(https://via.placeholder.com/1600x400)",
      },
    },
  },
  plugins: [],
};
