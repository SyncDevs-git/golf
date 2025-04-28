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
      "styrene-regular": ["Styrene-A-Web-regular", "sans-serif"],
      "styrene-medium": ["Styrene-A-Web", "sans-serif"],
      "styrene-bold": ["Styrene-A-Web-bold", "sans-serif"],
      playfair: ["Playfair", "serif"],
    },
    extend: {
      colors: {
        primary: "#FFA300",
        secondary: "#FFFFFF4D",
        teritory: "#08201C",
        brandGreen: "#189740",
        "gray-light": "#AAAAAA",
        "medium-gray": "#999999",
        deepForest: "#0A2B26",
        sonfSliver: "#E7EAEA",
        red: "#FF0000",
        'bright-gray': "#EEEEEE",
        amber: "#FFC107",
        blue: "#2196F3",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        lg: '16px',
        '2xl': '16px',
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '996px',
        xl: '1170px',
        '2xl': '1400px',
      },
    },
  },

  plugins: [],
};
