/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A3728', // Brown from logo
          light: '#6B5141',
          dark: '#2A1F17',
        },
        secondary: {
          DEFAULT: '#D4C4B7', // Gold/beige from logo
          light: '#E8DFD7',
          dark: '#B3A194',
        },
        custom: '#DBCDC0',
        custom1:'#E2D8CF'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'], oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
};