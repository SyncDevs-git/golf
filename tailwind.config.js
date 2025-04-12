/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    fontFamily: {
      "styrene-medium": ["Styrene-A-Web", "sans-serif"],
      playfair: ["Playfair", "serif"],
    },
    extend: {
      colors: {
        primary: "#FFA300",
        secondary: "#FFFFFF4D",
        teritory: "#08201C",
        brandGreen: "#189740",
        "gray-light": "#AAAAAA",
        deepForest: "#0A2B26",
      },
    },
  },

  plugins: [],
};
