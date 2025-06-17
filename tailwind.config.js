/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./theme.config.jsx",
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  darkMode: ['class', 'html[class~="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        galada: ["Galada", "cursive"],
        inter: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#7928CA',
          dark: '#A855F7',
        },
        cosmic: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          violet: '#7C3AED',
        },
        space: {
          dark: '#0a0a1a',
          darker: '#000510',
          purple: '#1a0f2e',
          blue: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'space-gradient': 'linear-gradient(180deg, #0a0a1a 0%, #1a0f2e 50%, #000510 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'cosmic-rotate': 'cosmic-rotate 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          'from': {
            'box-shadow': '0 0 20px rgba(139, 92, 246, 0.5)',
          },
          'to': {
            'box-shadow': '0 0 30px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.3)',
          },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'cosmic-rotate': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'cosmic': '0 0 50px rgba(139, 92, 246, 0.3)',
        'cosmic-lg': '0 0 80px rgba(139, 92, 246, 0.4)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.6)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.6)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.6)',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}