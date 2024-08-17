
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}",
                        "./index.html",
                        './dist/preline/preline/*.js',
];
export const theme = {
  extend: {
    colors: {
      'midnight': '#10CE53',
    }
  },
};

export const plugins = [
 require('@preline/plugin'),
  require('@tailwindcss/forms'),      
  require('@preline/overlay'),
  require('autoprefixer'),
];