/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#40ed4b",

          "secondary": "#EB5757",

          "accent": "#fdba74",

          "neutral": "#1C1C26",

          "base-100": "#EBEEF4",

          "info": "#8EC3EC",

          "success": "#189044",

          "warning": "#916108",

          "error": "#F86366",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
