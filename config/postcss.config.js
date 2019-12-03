const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ['./layouts/**/*.html'],
      whitelist: [
        'lazyloaded',
        'wide',
        ...whitelister([
          './assets/sass/common/_syntax.scss',
          './assets/sass/components/_code.scss',
        ]),
      ],
    }),
  ],
}
