/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
        'green': {
          600: '#00b400',
      },
        'blue': {
        600: '#b5e5fb',
        500: '#01579b',
        400: '#e9f8ff'
    },
  },
  plugins: [],
}
}
}
