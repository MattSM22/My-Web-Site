/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'galaxy': "url('./src/assets/background.jpg')",
        'galaxy-gif': "url('./src/assets/background.webp')"
      }
    },
  },
  plugins: [],
}
