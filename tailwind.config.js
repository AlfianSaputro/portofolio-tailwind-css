/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center:true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#7dd3fc",
        secondary: "#bef264",
        third: "#10b981",
      },
      screens: {
        '2xl' :'1320px'
      },
    },
  },
  plugins: [],
};

