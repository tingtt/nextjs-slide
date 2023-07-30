/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: ['1.875rem', '2.25rem'],
      base: ['2.25rem', '2.5rem'],
      lg: ['3rem', '1'],
      xl: ['3.75rem', '1'],
      '2xl': ['4.5rem', '1'],
      '3xl': ['6rem', '1'],
    },
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
    animation: {
      controleler_fadein: 'fadein 0.1s linear forwards',
      controleler_fadeout: 'fadeout 0.1s linear forwards',
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
  daisyui: {
    themes: [
      {
        hb: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#FF7E00',
          secondary: '#FFBD0D',
          accent: '#466EFF',
          neutral: '#2a323c',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#FA3326',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
