/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        gridMove: "gridMove 25s linear infinite",
        textGlow: "textGlow 4s ease-in-out infinite",
      },
      keyframes: {
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '300px 300px' },
        },
        textGlow: {
          '0%,100%': { filter: 'drop-shadow(0 0 10px #f97316)' },
          '50%': { filter: 'drop-shadow(0 0 30px #ef4444)' },
        },
      },
    },
  },
  plugins: [],
};
