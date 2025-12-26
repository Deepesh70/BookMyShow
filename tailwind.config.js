/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBackground:{
          50: "#edf1fc",
          100: "#dae5f9",
          200: "#b5cbf3",
          300: "#90b1ed",
          400: "#6b97e7",
          500: "#467de1",
          600: "#3764b4",
          700: "#284b87",
          800: "#19325a",
          900: "#0a192d",
        },
        premier:{
          50: "#edf4fd",
          100: "#dae9fb",
          200: "#b5d3f7",
          300: "#90bdf3",
          400: "#6ba7ef",
          500: "#4691eb",
          600: "#3873bc",
          700: "#2a558d",
          800: "#1c375e",
          900: "#0e192f",
        }
      }
    },
  },
  plugins: [],
}
