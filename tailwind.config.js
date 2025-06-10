/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2047a5",
        highlightedColor: "#04236e",
        lightbg: "#ebeffa",
        lightsky: "#e6f2fa",
      },
    },
  },
  plugins: [],
};
