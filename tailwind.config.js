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
          DEFAULT: '#000000', // Black
          light: '#222222',   // Slightly lighter black
          dark: '#000000',    // Pure black
        },
        secondary: {
          DEFAULT: '#FFFFFF', // White
          light: '#F5F5F5',   // Off-white
          dark: '#CCCCCC',    // Silver/gray
        },
        silver: '#C0C0C0',     // Classic silver
        custom: '#E5E5E5',     // Light gray for backgrounds
        custom1: '#F8F8F8'     // Very light gray
     
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'], oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
};