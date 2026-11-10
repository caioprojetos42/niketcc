/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nike: {
          black: '#080808',
          pitch: '#000000',
          dark: '#121212',
          surface: '#171717',
          surfaceLight: '#222222',
          gray: '#A0A0A0',
          lightGray: '#E5E5E5',
          white: '#FFFFFF',
          accent: '#FF4600', // Iconic Nike Infrared / Volt / Orange accent for subtle high-end badges
          red: '#E10600'
        }
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'Helvetica Neue', 'Arial Black', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace']
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        wide: '0.05em',
        widest: '0.2em',
        monumental: '0.35em'
      }
    },
  },
  plugins: [],
}
