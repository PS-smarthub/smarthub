/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../apps/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'sm': {'max':'1280px'},
      // => @media (min-width: 640px) { ... }

      'lg': {'max': '1920px'},
      // => @media (min-width: 768px) { ... }
    },
    fontSize: {
      's': '0.75rem', // captions, short paragraphs, labels
      'm': '1rem', // long and short texts, labels, messages
      'l': '1.25rem', // headings, highlighting, long texts
      'xl': '1.4rem', // headings, highlights
      '2xl': '2rem', // headings, highlights
      '3xl': '2.5rem', // headings, highlights
      '4xl': '3rem', // headings, highlights
      '5xl': '4rem', // headings, highlights
      '6xl': '5rem', // headings, highlights
    },
    colors:{
      'black': '#000000',
      'white': '#ffffff',
      'red': {
        700: '#680001',
        600: '#BE0004',
        500: '#ED0007',
        400: '#FF6E6F',
        300: '#FFB2B2',
      },
      'purple': {
        700: '#791D73',
        600: '#B12EA9',
        500: '#E552DA',
        400: '#E5A2DF',
        300: '#F0DCEE',
      },
      'blue': {
        700: '#004975',
        600: '#006EAD',
        500: '#0096E8',
        400: '#7EBDFF',
        300: '#9DC9FF',
        50: '#007bc0',
      },
      'turquoise': {
        700: '#0A4F4B',
        600: '#147671',
        500: '#419E98',
        400: '#79C5C0',
        300: '#B6EDE8',
      },
      'green': {
        700: '#004523',
        600: '#006C3A',
        500: '#00884A',
        400: '#4AB073',
        300: '#86D7A2',
      },
      'gray': {
        700: '#383B3E',
        600: '#595E62',
        500: '#7D8389',
        400: '#C1C7CC',
        300: '#E2E5eb',
      },
      'yellow': {
        700: '#BD9900',
        600: '#DEB300',
        500: '#FFCF00',
        400: '#FFDF95',
        300: '#FFEFD1',
      },
     
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}