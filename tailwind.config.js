/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      mainColor: "var(--mainColor)",
      textColor: "var(--textColor)",
      borderColor: "var(--borderColor)",
      placeHoderColor: "var(--placeHoderColor)",
      shareColor: "var(--shareColor)",
      priceColor: "var(--priceColor)",
      errorColor: "var(--errorColor)",
      iconColor: "var(--iconColor)",
      bgColor: "var(--bgColor)",
      blueWhite: "var(--blueWhite)",
      btnColor: "var(--btnColor)",
      whiteColor: "var(--whiteColor)",
    },

    extend: {},

  },
  plugins: [],
}

