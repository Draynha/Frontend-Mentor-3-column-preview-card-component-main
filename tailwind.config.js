/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "LexendDeca": "Lexend Deca",
        "BigShouldersDisplay": "Big Shoulders Display"
      },
      colors: {
        'Verylightgray': "hsl(0, 0%, 95%)",
        "Brightorange": "hsl(31, 77%, 52%)",
        "Darkcyan": "hsl(184, 100%, 22%)",
        "Verydarkcyan": "hsl(179, 100%, 13%)"
      }
    },
  },
  plugins: [],
}
