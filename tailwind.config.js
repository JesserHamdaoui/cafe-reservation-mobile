/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "1-black": ["Rubik-Black", "sans-serif"],
        "1-bold": ["Rubik-Bold", "sans-serif"],
        1: ["Rubik-Regular", "sans-serif"],
        "1-medium": ["Rubik-Medium", "sans-serif"],
        "1-light": ["Rubik-Light", "sans-serif"],
        "1-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "1-semibold": ["Rubik-SemiBold", "sans-serif"],
      },
      colors: {
        basic: "#27272a",
        primary: {
          50: "#f7f5ef",
          100: "#ece7d5",
          200: "#dad0ae",
          300: "#c5b17f",
          400: "#b3965c",
          500: "#a4844e",
          600: "#8d6b41",
          700: "#7c5a3c",
          800: "#604633",
          900: "#543c2f",
          950: "#2f1f19",
        },
      },
    },
  },
  plugins: [],
};
