/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        notoThai: ['"Noto Sans Thai Looped"', 'sans-serif'],
        pridi: ['Pridi', 'serif'],
      },
    },
  },
  plugins: [],
};
