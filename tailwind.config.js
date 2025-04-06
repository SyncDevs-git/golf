// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
     'styrene-medium': ['Styrene-A-Web', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#FFA300",
        secondary: "#FFFFFF4D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
