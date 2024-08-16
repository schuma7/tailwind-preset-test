const theme = require('./theme.js');

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: theme.colors,
      borderRadius: theme.borderRadius,
      fontSize: theme.fontSize,
      fontFamily: theme.fontFamily,
      boxShadow: theme.boxShadow,
      spacing: {
        18: '4.5rem',
      },
      lineHeight: {
        110: '110%',
        115: '115%',
        120: '120%',
        130: '130%',
        135: '135%',
        140: '140%',
        150: '150%',
        155: '155%',
        160: '160%',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
