/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brockmann: ['Brockmann', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        ndot: ['Ndot', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
