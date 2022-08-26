const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/core/layouts/**/*.html',
        './node_modules/@hyas/seo/layouts/**/*.html',
        './node_modules/@hyas/themes-starter-bootstrap/layouts/**/*.html',
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h3',
        'alert-link',
        ...whitelister([
          './node_modules/@hyas/themes-starter-bootstrap/assets/scss/common/_variables.scss',
          './node_modules/@hyas/themes-starter-bootstrap/assets/scss/components/_alerts.scss',
          './node_modules/@hyas/themes-starter-bootstrap/assets/scss/components/_code.scss',
          // './node_modules/@hyas/themes-starter-bootstrap/assets/scss/components/_syntax.scss',
        ]),
      ],
    }),
  ],
}
