/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      colors:{
        "dodgeroll-gold":"#F79F1A",
        "apple-green":"#046E18",
        "dire-wolf":"292727"
      }
    },
    "fontFamily":{
      Montserrat: "Montserrat, san-serif"
    },
    container:{
      center: true,
      padding: "2rem"
    }
  },
  plugins: [],
}
