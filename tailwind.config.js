/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx,mdx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif']
      },
      colors: {
        'whiter': '#ffffff',
        'gray': {
          600: '#f4f5f4',
          400: '#caced8',
      },
        'green': {
          600: '#00b400',
      },
        'blue': {
        800: '#b3e5fc',
        600: '#b5e5fb',
        500: '#01579b',
        400: '#e9f8ff',
        300: '#002b4d',
    },
  },
  plugins: [],
}
}
}
