/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'grey-default-key': '#D3D6DA',
        'blue-default-key': '#565F7E',
        'grey-box': '#939B9F',
        'grey-key': '#818181',
        'green-box': '#66A060',
        'yellow-box': '#CEB02C',
        'opacity-bg': 'rgba(243, 243, 243, 0.89)',
        'opacity-bg-dark': 'rgba(38, 43, 60, 0.89)',
        'white-bg': '#E5E5E5',
        'grey-bg': '#F3F3F3',
        'blue-bg': '#262B3C',
        'containter-bg': 'rgba(243, 243, 243, 1)',
        'containter-bg-dark': 'rgba(218, 220, 224, 0.03)',
        'black-font': '#56575E',
        'white-font': '#DADCE0',
        'stroke-dark': '#273B4A',
      },
      borderWidth: {
        '1': '1px'
      },
      borderRadius: {
        'box-radius': '5px'
      }
    },
  },
  plugins: [],
}
