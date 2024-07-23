/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
      'volkhov': ['Volkhov'],
    },

    extend: {

      container: {
        center: true,

      },
      colors: {
        'orangy': '#DF6951',
        'yellowy': '#f2994a',
        'blueblack': '#181E4B',
        'greyy': '#5E6282',
      }
    },
  },
  plugins: [],
}