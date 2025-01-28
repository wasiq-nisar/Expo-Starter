/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Main App entry file
    "./app/**/*.{js,jsx,ts,tsx}", // All files inside the `app` directory
    "./components/**/*.{js,jsx,ts,tsx}",
    "./global.css", // If Tailwind classes are used in your global CSS
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#25292e",
      },
    },
  },
  plugins: [],
}
