/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Patrick Hand', 'cursive'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
};
