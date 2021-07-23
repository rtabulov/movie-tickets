/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

const IN_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    IN_PRODUCTION && require('autoprefixer'),
    IN_PRODUCTION &&
      require('@fullhuman/postcss-purgecss')({
        content: [
          './public/**/*.html',
          './index.html',
          './src/**/*.vue',
          './node_modules/bootstrap/dist/js/bootstrap.min.js', // bootstrap
          './node_modules/swiper/swiper-bundle.min.js', // swiper
        ],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            '',
          );
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g,
            ) || []
          );
        },
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
        ],
      }),
  ],
};
