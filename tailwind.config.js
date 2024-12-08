/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets", "./css"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440px"
      },
    },
    colors:{
      cyan: "hsl(158, 36%, 37%)",
      cream: "hsl(30, 38%, 92%)",
      blue: {
        dark: "hsl(212, 21%, 14%)",
        default: "hsl(228, 12%, 48%)",

      },
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      Montserrat: ["Manrope", "serif"],
      Fraunces: ["Fraunces", "serif"]
    },
    fontWeight: {
      default: 500,
      bold: 700
    }
  },
  plugins: [],
}

