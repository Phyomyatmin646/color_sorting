const tailwindcss = require('@tailwindcss/postcss'); // v4 အတွက် package

module.exports = {
  plugins: [
    tailwindcss,
    require('autoprefixer'),
  ],
};
