/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Gill Sans"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1C3F3A",
          secondary: "#EAE6D7",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
