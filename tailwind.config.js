/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRedStart: '#FF5353',
        customRedEnd: '#E91E1E',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #FF5353 100%, #E91E1E 100%)',
      },
    },
  },
  plugins: [],
}

