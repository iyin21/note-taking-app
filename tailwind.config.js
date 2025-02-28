/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
            100: "#5F5F5F",
        },
        white: {
            100: "#ffffff",
        },
        black: {
            100: "#000000",
        },
    },
    fontFamily: {
      raleway: ["Raleway", "serif"],
  },
    },
  },
  plugins: [],
}

