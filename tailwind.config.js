/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff014f",
        secondary: "#212428",
        "card-dark": "#1e2024",
        "text-light": "#c4cfde",
        "text-dark": "#878e99",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'card': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(145deg, #1e2024, #23272b)',
        'card-hover': 'linear-gradient(to right bottom, #212428, #16181c)',
      },
    },
  },
  plugins: [],
}
