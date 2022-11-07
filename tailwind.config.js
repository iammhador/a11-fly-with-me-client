/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#26547C",

          secondary: "#EF476F",

          accent: "#FFD166",

          neutral: "#FCFCFC",

          "base-100": "#EDEDED",

          info: "#06D6A0",

          success: "#1DC386",

          warning: "#FCA336",

          error: "#E05542",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
