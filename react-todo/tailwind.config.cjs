/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
  "./index.html",

 ],
  theme: {
    extend: {
      maxHeight:{
        '70':'50vh'
      }
    },
  },
  plugins: [],
}
