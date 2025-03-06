/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}"

  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#161647",
      },
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
      },
    },
    screen:{
      xs:'540px'
    }
  },
  plugins: [],
};
