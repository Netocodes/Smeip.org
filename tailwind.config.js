
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}",
                        "../index.html",
                        '../node_modules/preline/dist/*.js',
];
export const theme = {
  extend: {},
};

export const plugins = [
 
  require('@tailwindcss/forms'),      
  require('@preline/overlay'),
  require('@types/preline'),
  require('autoprefixer'),
];