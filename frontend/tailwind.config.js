/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pink: "#525CEB",
      primeColor: "#f87d7d",
      bg: "#FBF9F1",
      black: "#3C3633",
      grey: "#BBE2EC",
      darkGrey: "#ddd",
      bg_primary: "#F9FBE7",
      primary: "#FD5F07",
      white: "#FFF",
      danger: "#FF8372",
      slate: "#e2e8f0",
      secondary: "#C84802",
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1000px" },

      md: { max: "767px" },

      sm: { max: "639px" },

      xs: { max: "430px" },
    },
  },
  plugins: [],
};
// F9FBE7 F0EDD4
