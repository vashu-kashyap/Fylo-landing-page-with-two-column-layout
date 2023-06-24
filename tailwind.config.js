/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Blue": "hsl(243, 87%, 12%)",
        "Desaturated-Blue": "hsl(238, 22%, 44%)",
        "Bright-Blue": "hsl(224, 93%, 58%)",
        "Moderate-Cyan": "hsl(170, 45%, 43%)",
        "Light-Grayish-Blue": "hsl(240, 75%, 98%)",
        "Light-Gray": " hsl(0, 0%, 75%)",
      },
      fontFamily:{
        'Raleway':['Raleway', 'sans-serif'],
        'Open-sans':['Open Sans', 'sans-serif']
      },
      screens:{
        'xs':'375px'
      }
    },
  },
  plugins: [],
};
