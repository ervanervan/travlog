/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'textBlack': '#191825',
        'textWhite': '#FFFFFF',
        'textSecondary': '#F85E9F',
        'textGray': '#19182580',
        'textLight': '#EEEEEE',
        'textDark': '#222831',
        'textBlack50': '#191825',
        'textBlack75': '#191825BF',
        'textOrange': '#FF5722',
        'bgPrimary': '#5D50C6',
        'bgBlack75': '#191825BF',
        'bgOrange8': '#FACD4914',
        'bgWhite': '#FFFFFF',
        'bgGray': '#D9D9D9',
        'bgLight': '#EEEEEE',
        'bgYellow': '#FACD49'
      }
    },
  },
  plugins: [],
}

