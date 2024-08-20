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
    },
  },
  plugins: [],
};
