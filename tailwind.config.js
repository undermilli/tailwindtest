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
        logoGray: "C4C4C4",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
