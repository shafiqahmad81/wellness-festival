/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js}"],
  theme: {
    fontFamily: {
      apertura: ["Apertura", "system-ui"],
      espander: ["Espander", "system-ui"],
    },
    extend: {
      colors: {
        pink: "hsl(var(--pink))",
        green: "hsl(var(--green))",
        orange: "hsl(var(--orange))",
        flashWhite: "hsl(var(--flash-white))",
        offWhite: "hsl(var(--off-white))",
      },
    },
  },
  plugins: [],
};
