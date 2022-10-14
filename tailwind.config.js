/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#FF5757',
      'primary-dark': '#E82B5C',
      'secondary': '#F7A3A6',
      'gray-base': '#F0F0F5',
      'gray-dark': '#48484A'
    }
  },
  plugins: [],
}
