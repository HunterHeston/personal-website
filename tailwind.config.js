/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // https://www.jimraptis.com/tools/color-pairs
      background: "#212529",
      primary: "#dae8df",
      accent: "#81b29a",
    },
  },
  plugins: [],
};
