/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        core: {
          pri: "#0A6BC1",
          bac: "#ABD3F6",
        },
      },
    },
  },
  plugins: [],
}
