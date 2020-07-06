# Hyas

[![GitHub release](https://img.shields.io/github/release/h-enk/hyas.svg?style=flat-square)](https://github.com/h-enk/hyas/releases)
[![Build Status](https://img.shields.io/travis/h-enk/hyas.svg?style=flat-square)](https://travis-ci.org/h-enk/hyas)
[![Netlify](https://img.shields.io/netlify/895a161c-86be-48a2-8c57-a8c5d68cd1a4?style=flat-square)](https://hyas.netlify.com/)

Hyas is a Hugo starter helping you build modern websites.

## Features

- Lightweight code base
- 100 scores Google Lighthouse
- A+ scores [Mozilla Observatory](https://observatory.mozilla.org/)
- Easily make it your own
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/download/#source-files) Sass (no JavaScript) and [Autoprefixer](https://github.com/postcss/autoprefixer)
- Check SCSS for errors with [stylelint](https://stylelint.io/)
- Check JavaScript for errors with [ESLint](https://eslint.org/)
- Check Markdown for errors with [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
- Environment specific configuration
- Image shortcode with [lazysizes](https://github.com/aFarkas/lazysizes) and blur up
- Fingerprinting and [SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (production)
- Remove unused CSS (production) with [PurgeCSS](https://github.com/FullHuman/purgecss)

See a working example at [hyas.netlify.app](https://hyas.netlify.app/)

## Requirements

Make sure all dependencies have been installed:

- [Hugo](https://gohugo.io/) >= 0.73.0/extended
- [Node.js](https://nodejs.org/) >= 13.11.0
- [Yarn](https://yarnpkg.com/) >= 1.22.4 (recommended)

## Get started

Create a new Hyas project:

```bash
git clone git@github.com:h-enk/hyas.git my-hyas-site
```

Install dependencies:

```bash
# @ my-hyas-site/
$ yarn install
```

Build development theme with live reloading and injection:

```bash
# @ my-hyas-site/
$ yarn start
```

### Other commands

- `yarn lint:styles` - Check Sass for errors
- `yarn lint:scripts` - Check JavaScript for errors
- `yarn clean` - Delete temporary directories
- `yarn build` - Build production theme

## Quick start

Click the Deploy to Netlify button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/h-enk/hyas)

## Documentation

- [Netlify](https://docs.netlify.com/)
- [Hugo](https://gohugo.io/documentation/)
- [Hyas](https://gethyas.com/)


## Communities

- [Netlify Community](https://community.netlify.com/)
- [Hugo Forums](https://discourse.gohugo.io/)


## Contributing

Contributions are welcome. Check the [contributing guidelines](https://github.com/h-enk/hyas/blob/master/.github/CONTRIBUTING.md) to help you get started.
