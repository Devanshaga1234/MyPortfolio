/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Innovative Modern Palette
        'neon': {
          'cyan': '#00FFFF',
          'pink': '#FF10F0',
          'purple': '#8A2BE2',
          'green': '#00FF41',
          'orange': '#FF6B35',
          'blue': '#0066FF',
        },
        'glass': {
          'white': 'rgba(255, 255, 255, 0.1)',
          'black': 'rgba(0, 0, 0, 0.1)',
          'blue': 'rgba(59, 130, 246, 0.1)',
          'purple': 'rgba(147, 51, 234, 0.1)',
        },
        'dark': {
          'primary': '#0A0A0A',
          'secondary': '#1A1A1A',
          'tertiary': '#2A2A2A',
          'accent': '#3A3A3A',
        },
        'gradient': {
          'primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          'tertiary': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          'dark': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'center top' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
          '50%': { 'background-size': '400% 400%', 'background-position': 'right center' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

