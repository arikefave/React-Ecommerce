/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        f_poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        cGrey_1: "#828282",
        cGrey_2: "#A2A2A2",
        cGrey_3: "#E0E0E0",
        cBlack: "#212121",
        cGreen: "#7DB800",
        cPink: "#E46D6D",
        cGrey: "#515151",
        cPrGrey: "#F2F2F2",
        cFilterGrey: "#4F4F4F",
      },
    },
  },
  plugins: [],
};
