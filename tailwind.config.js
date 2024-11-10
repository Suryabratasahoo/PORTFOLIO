/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins','sans-serif']
      }
    },
  },
  plugins: ['daisyui'],
}

