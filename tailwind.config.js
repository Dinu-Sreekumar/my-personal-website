/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom animations and keyframes here
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards', // Apply fadeIn animation over 1s, ease-out, stay at end
        slideUp: 'slideUp 0.8s ease-out forwards', // Apply slideUp animation over 0.8s, ease-out, stay at end
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}