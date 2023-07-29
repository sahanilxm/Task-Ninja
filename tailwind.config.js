/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*{html,ts}"
  ],
  theme: {
    extend: {
      screens:{
        'small': '400px',
      },
    },
  },
  plugins: [],
}

