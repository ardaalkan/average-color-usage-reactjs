/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(230, 54%, 43%)",
        secondary: "hsl(180, 100%, 50%)",
      },
      backgroundColor: {
        primary: "hsl(217, 46%, 37%)",
        secondary: "hsl(0, 0%, 93%)",
        background: "hsl(0, 0%, 96%)",
      },
    },
  },
  plugins: [],
};
