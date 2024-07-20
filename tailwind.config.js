/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'primary': '#00A9FF', // Blue
        'secondary': '#8A2BE2', // Purple
        'tertiary': '#FF533D', // Red
        'highlight': '#FFA500', // Orange
        'txt': '#333333',
        'whitish': '#F5F5F5',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}