/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'about-img': "url('./assets/about-img.png')",
      },
    },
  },
  plugins: [],
};
