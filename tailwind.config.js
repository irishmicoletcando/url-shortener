/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'serif']
      }, 

      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)',
        'light-cyan': 'hsl(179.17, 56.25%, 74.9%)'
      },

      backgroundImage: {
        'boost-desktop': 'url(/bg-boost-desktop.svg)',
        'boost-mobile': 'url(/bg-boost-mobile.svg)',
        'shorten-desktop': 'url(/bg-shorten-desktop.svg)',
        'shorten-mobile': 'url(/bg-shorten-mobile.svg)'
      }
    },
  },
  plugins: [],
}