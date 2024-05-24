const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
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
        TechBlue: " #0079FC",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
