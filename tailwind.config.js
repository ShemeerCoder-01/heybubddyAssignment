module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_99": "#00000099", "900_33": "#00000033" },
        white: { A700: "#ffffff" },
        indigo: { 50: "#e4eaed" },
        blue: "#1da1f2",
        blue_600: "#1e97e1",
      },
      boxShadow: {},
      fontFamily: { segoeui: "Segoe UI", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
