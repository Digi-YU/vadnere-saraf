/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./src/components/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C444F',
        secondary: '#9F5255',
        accent: {
          terra: '#E16A54',
          coral: '#fff'
        }
      },
      scale: {
        '160': '1.6'
      },
      zIndex: {
        '1': '1',
        '10': '10'
      }
    },
  },
  plugins: [],
} 