/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary:"#",
        textPrim:"#ffff",
        textSec:"#D4D4D4",
      },
      fontFamily :{ 
        geist: ["geist-regular","sans-serif"], 
      } 
    },
  },
  plugins: [],
}