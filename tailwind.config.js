const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT( {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
"./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      
      fontFamily: {
        sans: ["roboto-regular", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primaryColor: "#141414",
      secondaryColor: "#D9D9D9",
      lightGray: "#202020",
      redColor: "#BE1902",
      white: "white",
    },
    
  },
  plugins: [],
});
