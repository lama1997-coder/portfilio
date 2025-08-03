/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow': '-4px -4px 2px 0 #12F7D6',
      },
    },
    fontSize:{
      title:'64px'
    }
  },
  plugins: [],
}