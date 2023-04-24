/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        // https://www.jimraptis.com/tools/color-pairs
        background: "#212529",
        darker: "#101214",
        primary: "#dae8df",
        primaryFaded: "#a1ada6",
        accent: "#0891b2",
        darkAccent: "#22d3ee",
      },
    },
  },
  plugins: [],
};
