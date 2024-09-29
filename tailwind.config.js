/**@type {import ('tailwindcss').Config} */

import { Container } from 'postcss';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center : true,
        padding: "15px"  
    },

  colors:{
    accent: "#FF8f9C",
    blackish: "lblblb",
  },
  },
  },
  plugins: [],
};