/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-layout': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      },
      animation: {
        fadeIn: 'fadeIn 2s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'responsive': 'max(1.4vw, 16px)',
        'responsive-xl': 'clamp(2vw, 4rem, 24px)'
      },
    },
  },
  plugins: [],
}