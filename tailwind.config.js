/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#FF5757',
      'primary-dark': '#E82B5C',
      'secondary': '#F7A3A6',
      'gray-base': '#F0F0F5',
      'gray-dark': '#48484A'
      },
    },
  },
  plugins: [],
};
