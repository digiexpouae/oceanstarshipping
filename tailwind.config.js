// tailwind.config.js (or .mjs)
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",  // Include the src folder
  ],
  theme: {
    extend: {
      colors:{
        primary:"#161647",
      }
    },
  },
  plugins: [],
};
