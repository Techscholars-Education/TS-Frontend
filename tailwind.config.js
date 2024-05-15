/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans serif"],
        Poppins: ["Poppins", "sans serif"],
      },
      colors: {
        yellowish: "#FFE01B",
        darkBlue: " #001B3F",
      },
    },
  },
  plugins: [
   
  ],
});
