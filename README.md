# Hyas
[![GitHub release](https://img.shields.io/github/release/h-enk/hyas.svg?style=flat-square)](https://github.com/h-enk/hyas/releases)
[![Build Status](https://img.shields.io/travis/h-enk/hyas.svg?style=flat-square)](https://travis-ci.org/h-enk/hyas)
[![Netlify](https://img.shields.io/netlify/895a161c-86be-48a2-8c57-a8c5d68cd1a4?style=flat-square)](https://hyas.netlify.com/)

Hyas is The Smart, Flexible [Hugo](https://gohugo.io/) Starter, helping you create a site that is performant, accessible, and optimized for search engine results ranking. Hyas is the son of [Atlas](https://github.com/indigotree/atlas), Copyright (c) 2017 Indigo Tree, [MIT License](https://github.com/indigotree/atlas/blob/master/LICENSE).

## Features

Hyas provides the following features out of the box:
- Bootstrap Sass (no JavaScript)
- Pre configured support for Hugo Pipes, with Sass and Autoprefixer
- Check Sass and JavaScript for errors
- Environment specific configuration
- Fingerprinting and [SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (production)
- Remove unused CSS (production)
- Base HTML templates with easy customisation/extension
- Image shortcode with [lazysizes](https://github.com/aFarkas/lazysizes) and [blur up](https://github.com/aFarkas/lazysizes/tree/master/plugins/blur-up) plugin
- [Configuration](https://github.com/h-enk/hyas/blob/master/netlify.toml) for Netlify deployments

## Requirements

Make sure all dependencies have been installed:

- Hugo >= 0.60.1/extended
- Node.js >= 10.16.0
- npm >= 6.9.0
- Yarn >= 1.19.1 (recommended)

## Getting Started

Create a new Hyas project:

```bash
$ git clone git@github.com:h-enk/hyas.git my-hyas-site
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

## Directory Structure

```shell
my-hyas-site/               # → Root of your Hyas based theme
├── archetypes/             # → Content template files
├── assets/                 # → Asset files (fonts, images, js, lambda, and sass)
├── config/                 # → Configuration directives
│   ├── _default/           # → Development and defaults
│   ├── production/         # → Production specific
│   ├── staging/            # → Staging specific
│   ├── postcss.config.js   # → PostCSS configuration file
├── content/                # → Content using page bundles
├── data/                   # → Custom data files
├── functions/              # → Netlify lambda functions directory (production)
├── layouts/                # → Template files
│   ├── _default/           # → Base templates for list & singular pages
│   ├── partials/           # → Partials (footer, head, header, and sidebar)
│   ├── shortcodes/         # → Shortcodes (img)
│   │── 404.html            # → 404 Template
│   │── index.headers       # → Custom Netlify HTTP headers
│   │── index.html          # → Homepage template
│   │── index.redirects     # → Custom Netlify redirect rules
│   │── robots.txt          # → Template for robots.txt
│   │── sitemap.xml         # → Custom sitemap template
├── node_modules/           # → Node.js packages (never edit)
├── public/                 # → Publish directory (temporary)
├── resources/              # → Resource cache directory (temporary)
├── static/                 # → Static content (favicons et cetera)
├── .eslintrc.json          # → ESLint configuration
├── .stylelintrc.json       # → stylelint configuration
├── netlify.toml            # → Netlify configuration
├── package.json            # → Node.js dependencies and scripts
└── yarn.lock               # → Yarn lock file (never edit)
```
