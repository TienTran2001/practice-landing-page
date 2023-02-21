/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#20B486',
        grayLight: '#6D737A',
        blue: '#536E96',
        orangeLight: 'rgba(233, 248, 243, 0.7)',
      },
      width: {
        container: '1480px',
      },
      maxWidth: {
        container: '1480px',
      },
      height: {
        header: '98px',
      },
      boxShadow: {
        pri: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
};
