
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}",
                        "../index.html",
                        '../node_modules/preline/dist/*.js',
];
export const theme = {
  extend: {
    colors: {
      'midnight': '#10CE53',
    }
  },
};

export const plugins = [
 
  require('@tailwindcss/forms'),      
  require('@preline/overlay'),
  require('autoprefixer'),
];