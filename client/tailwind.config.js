/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:["class"],
  theme: {
    extend: {
      fontFamily:{
        "poppins":["Poppins", "sans-serif"],
        "josefin":["Josefin Sans", "sans-serif"],
      },
      backgroundImage:{
        'gradial-radiant':'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 100deg to 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        "1000px":"1000px",
        "1100px":"1100px",
        "1200px":"1200px",
        "1300px":"1300px",
        "1500px":"1500px",
        "800px":"800px",
        "400px":"400px",
      }
    },
  },
  plugins: [],
}

