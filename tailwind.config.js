/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#ccdcff',
          200: '#99b9ff',
          300: '#6696ff',
          400: '#3373ff',
          500: '#0050ff',
          600: '#0040cc',
          700: '#003099',
          800: '#002066',
          900: '#001033',
        },
        secondary: {
          50: '#e6faf8',
          100: '#ccf5f1',
          200: '#99ebe3',
          300: '#66e0d5',
          400: '#33d6c7',
          500: '#00ccb9',
          600: '#00a394',
          700: '#007a6f',
          800: '#00524a',
          900: '#002925',
        },
        accent: {
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe399',
          300: '#ffd566',
          400: '#ffc733',
          500: '#ffb900',
          600: '#cc9400',
          700: '#996f00',
          800: '#664a00',
          900: '#332500',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        tech: ['Audiowide', 'sans-serif'],

      },
    },
  },
  plugins: [],
};