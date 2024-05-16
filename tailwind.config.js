const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*/*/*.{js,ts,jsx,tsx}",
  ],
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
  plugins: [require("@tailwindcss/line-clamp")],
};
