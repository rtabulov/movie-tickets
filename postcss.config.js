const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.vue', './index.html'],
      safelist: [
        /.*(swiper).*/, // swiper.js
        /.*(tab).*/, // tabs-slider.js
      ],
    }),
  ],
};
