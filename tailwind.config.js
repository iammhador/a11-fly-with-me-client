/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e89dce",

          secondary: "#fcb5e8",

          accent: "#ff999c",

          neutral: "#23202C",

          "base-100": "#EDEDED",

          info: "#366CD9",

          success: "#1DC386",

          warning: "#FCA336",

          error: "#E05542",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
