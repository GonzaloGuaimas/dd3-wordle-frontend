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
        'opacity-bg': 'rgba(243, 243, 243, 0.89)',
        'grey-box': '#939B9F',
        'grey-key': '#818181',
        'grey-default-key': '#D3D6DA',
        'green-box': '#66A060',
        'yellow-box': '#CEB02C',
        'grey-bg': '#F3F3F3',
        'black-font': '#56575E'
      },
    },
  },
  plugins: [],
}
