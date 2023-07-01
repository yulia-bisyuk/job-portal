/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        xs: '15px',
        sm: '30px',
        lg: '60px',
      },
    },

    extend: {
      colors: {
        primaryGreen: '#338573',
        lightGreen: '#EFF6F2',
        darkGreen: '#0C4F3F',
        lightGrey: '#F6F7FA',
        textGrey: '#616161',
        textLightGrey: '#5F5858',
        // dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '360px',
      ss: '480px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
