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
    backgroundImage: {
        "product-mobile": "url('./images/image-product-mobile.jpg",
        "product-desktop": "url('./images/image-product-desktop.jpg')"
      },
    colors:{
      cyan:{
        default:"hsl(158, 36%, 37%)", 
        dark: "#1A4032"
      } ,
      cream: "hsl(30, 38%, 92%)",
      blue: {
        dark: "hsl(212, 21%, 14%)",
        default: "hsl(228, 12%, 48%)",

      },
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "serif"],
      Fraunces: ["Fraunces", "serif"]
    },
    fontWeight: {
      default: 500,
      bold: 700
    }
  },
  plugins: [],
}

