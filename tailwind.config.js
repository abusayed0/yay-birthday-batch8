/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnPrimaryBg: "#419197",
      },
      fontFamily: {
        primaryFont: "IBM Plex Sans, sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

