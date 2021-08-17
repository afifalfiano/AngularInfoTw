const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
    purge: {
      enabled: true,
      content: [
        './src/**/*.{html,ts}',
      ]
    },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
