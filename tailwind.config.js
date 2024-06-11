/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slider1': "url('./img/slider-1.jpg')",
        'slider2': "url('./img/slider-2.jpg')",
      }
    },
  },
  plugins: [],
}

