/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: '#2f0d78',
        secundario: '#f671ff',
        fondo: '#dee1e2',
      },
      height: {
        'nav': '80px',
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'wave': 'wave 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}