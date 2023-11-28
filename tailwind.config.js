/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard-Regular", "sans"],
      },
      colors: {
        whiteF: "#ffffff",
      },
      backgroundColor: {
        logoGray: "#C4C4C4",
        modalGray: "#666666",
        inputBg: "#5f5f5f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
