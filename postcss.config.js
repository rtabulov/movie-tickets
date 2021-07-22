const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.vue'],
      safelist: [/.*(swiper).*/, 'html', '*', 'body'],
    }),
  ],
};
