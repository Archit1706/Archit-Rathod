/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme.config.jsx",
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  // darkMode: 'class',
  darkMode: ['class', 'html[class~="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        galada: ["Galada", "cursive"],
      },
      colors: {
        primary: {
          light: '#7928CA',
          dark: '#A855F7',
        },
      },
    },
  },
  plugins: [],
}