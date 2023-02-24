/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'grey-box': '#939B9F',
        'green-box': '#66A060',
        'yellow-box': '#CEB02C',
        'toogle-bar': '#F3F3F3',
      },
    },
  },
  plugins: [],
}
