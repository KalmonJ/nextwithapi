/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monrope: ["var(--monrope)"],
      },
      colors: {
        orange: "#D87D4A",
        white: "#FFFFFF",
        black: "#000000",
        "light-orange": "#FBAF85",
        "black-100": "#101010",
        "light-gray": "#F1F1F1",
        "very-light-gray": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
