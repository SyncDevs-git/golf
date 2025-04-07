// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
     'styrene-medium': ['Styrene-A-Web', 'sans-serif'],
     playfair: ['Playfair', 'serif'],
    },
    extend: {
      colors: {
        primary: "#FFA300",
        secondary: "#FFFFFF4D",
        teritory: "#08201C",
        brandGreen: "#189740",
        'gray-light': '#AAAAAA',
        deepForest: "#0A2B26",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
