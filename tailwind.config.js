

export const content = ["./src/**/*.{html,js}",
                        "./index.html",
                        '../dist/preline/preline/plugin/**/*.js',
                        
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