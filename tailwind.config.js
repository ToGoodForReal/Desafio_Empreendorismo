/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-title': ['Cormorant Garamond', 'serif'],
        'serif-alt': ['Gabriela', 'serif'],
        'sans-body': ['Josefin Sans', 'sans-serif'],
        'sans-alt': ['Cagliostro', 'sans-serif']
      },
      colors: {
        'luminis-deep': '#0D0D0D',
        'luminis-dark': '#260101',
        'luminis-medium': '#400101',
        'luminis-bright': '#730202',
        'luminis-accent': '#8C0303',
        'luminis-text': '#F5F5F5'
      }
    }
  },
  plugins: [],
}