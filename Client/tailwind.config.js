/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#D6EBF5', // Light variant
          200: '#ADD7EA',
          300: '#85C3DF',
          400: '#5CAFDB',
          500: '#2589BD', // Default
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
