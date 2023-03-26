const colors = require('tailwindcss/colors');
const pallete = require('./pallete');

module.exports = {
  prefix: '',
  mode: 'jit',
  important: false,
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      black: '#1C1D22',
      gray: pallete.gray,
      neutral: pallete.neutral,
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.3s ease-out',
        'fade-out-down': 'fade-out-down 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.3s ease-out',
        'fade-out-up': 'fade-out-up 0.3s ease-out',
      },
      boxShadow: {
        custom: '0px 0px 50px 0px rgb(82 63 105 / 15%)',
      },
      colors: {
        primary: pallete.primary,
        night: {
          50: '#EDEFFF',
          100: '#EDEFF4',
          200: '#DDE0E9',
          300: '#AFB3BE',
          400: '#71747D',
          500: '#222327',
          600: '#1E2028',
          700: '#151721',
          800: '#0D0F1B',
          900: '#080916',
        },
        black: {},
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'system-ui', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
    scrollbar: ['dark', 'rounded'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar'),
  ],
};
