/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeout: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
      },
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
  },
  daisyui: {},
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
