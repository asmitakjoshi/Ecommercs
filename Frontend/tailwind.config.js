const withMT = require("@material-tailwind/react/utils/withMT");
 
/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       margin: {
        '250px': '250px',
       },
      width:{
        '250px': '250px',      
      },
      colors:{
        "orangetext": "#f68773",
      },
      button:{
        "default": "bg-gray-800 text-white hover:bg-gray-700 hover:text-white focus:outline"
      }
    },
  },
  plugins: [],
})

