/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      'spin-slow': 'spin 10s linear infinite',
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: "#000000",
      lal: "#FDFE00",
      wh: "#febc0f",
      bgrey: "#F9DBBB",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubblegum: "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
