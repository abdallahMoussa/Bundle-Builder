/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'baby-blue': '#EDF4FF',
          purple: '#4E2FD2',
          green: '#0AA288',
        },
        texts: {
          main: '#0B0D10',
          label: '#484848',
          description: '#1F1F1F',
          sale: '#D8392B',
        },
        borders: {
          main: '#CED6DE',
          secondary: '#1F1F1F',
          silver: '#CCCCCC',
          'light-grey': '#E6EBF0',
          grey: '#525963'
        }
      },
      fontFamily: {
        regular: ['Gilroy-Regular', 'system-ui', 'sans-serif'],
        medium: ['Gilroy-Medium', 'system-ui', 'sans-serif'],
        semibold: ['Gilroy-SemiBold', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
      },
    },
  },
  plugins: [],
}