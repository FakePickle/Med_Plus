module.exports = {
  mode: "jit",
  content: [
    "./src/pages/Homescreen/**/*",
    "!./src/pages/LoginSignup/**/*",
    "./src/pages/Cart/**/*",
    "./src/pages//**/*",
    "!./src/pages/Manufacturer/**/*",
    "./src/pages/Edit/**/*",
    "./src/pages/Analysis/**/*",
    "./src/pages/Inventory/**/*",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_01: "#ffffff", A700: "#fefefe" },
        teal: { 50: "#e3edee", 200: "#84bdc2" },
        blue_gray: { 600: "#427f85", "100_01": "#c4e1e4" },
        gray: { 500: "#a6a5a5", 600: "#757575" },
        black: { 900: "#000000" },
      },
      boxShadow: {
        xs: "-2px 0px  4px 0px #00000019",
        sm: "0px 17px  38px 0px #00000019",
        md: "7.05px 0px  14px 0px #517e8419",
      },
      fontFamily: { zenkakugothicantique: "Zen Kaku Gothic Antique" },
      backgroundImage: {
        gradient: "radial-gradient(closest-side at center, #BBDEE2, rgba(255, 255, 255, 0.744))",


      }, // Updated color to #BBDEE2
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
