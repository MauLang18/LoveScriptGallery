/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#6f90f4',
        Secondary:'#23a3c7',
        tertiary:'#6f90f4',
        light:'#BDBDBD',
        dark: '#000036',
      }
    },
  },
  plugins: [],
}

