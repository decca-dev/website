module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        slideUpEnter: {
          '0%': {
            opacity: 0,
            // transform: 'translateY(20px)'
          },
          '100%': {
            opacity: 1,
            // transform: 'translateY(0px)'
          },
        },
        slideDownLeave: {
          '0%': {
            opacity: 1,
            // transform: 'translateY(0px)'
          },
          '100%': {
            opacity: 0,
            // transform: 'translateY(20px)'
          },
        },
      },
      animation: {
        translate_top: 'translate_top 1s ease-in-out',
        translate_right: 'translate_right 1s ease-in-out',
        slideUpEnter: '.5s ease-out slideUpEnter',
        slideDownLeave: '.5s ease-out slideDownLeave',
      },
    },
  },
  plugins: [],
};
