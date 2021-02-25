# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.4.4](https://github.com/h-enk/hyas/compare/v1.4.3...v1.4.4) (2021-02-25)

### [1.4.3](https://github.com/h-enk/hyas/compare/v1.4.2...v1.4.3) (2021-02-24)


### Dependencies

* update package-lock.json ([9a0fc76](https://github.com/h-enk/hyas/commit/9a0fc7677a7799e2546c847f6360cb0111fcac57))
* update package-lock.json ([c0b6fde](https://github.com/h-enk/hyas/commit/c0b6fde44c0cbf4908fe30b235d0dd826d21325f))

### [1.4.2](https://github.com/h-enk/hyas/compare/v1.4.1...v1.4.2) (2021-02-24)

### [1.4.1](https://github.com/h-enk/hyas/compare/v1.4.0...v1.4.1) (2021-02-24)

## [1.4.0](https://github.com/h-enk/hyas/compare/v1.3.5...v1.4.0) (2021-02-24)


### Features

* add check commands ([a9349ff](https://github.com/h-enk/hyas/commit/a9349ff04b517a50a9400c3a99c4ffa7f7e22b0e))


### Dependencies

* bump autoprefixer, stylelint, netlify-lambda, eslint, and @fullhuman/postcss-purgecss to latest versions ([78dfeed](https://github.com/h-enk/hyas/commit/78dfeedd57ec870565778d905d3e40d43e438233))


### Documentation

* update readme ([25fb636](https://github.com/h-enk/hyas/commit/25fb6366e3689fb7562ea0ab9ae104ad47667c7f))
* update requirements sections ([7dcc75e](https://github.com/h-enk/hyas/commit/7dcc75e070d7a60be68b5a59a6a5c040b547676c))
* update requirements sections ([d3c1791](https://github.com/h-enk/hyas/commit/d3c179114cd71c72a1b6aa03d5ecfb0accb894d8))
* update requirements sections ([3b22f5b](https://github.com/h-enk/hyas/commit/3b22f5ba7984b6687fa7ed549efb358ad5605b1c))
* update requirements sections ([aebd1d6](https://github.com/h-enk/hyas/commit/aebd1d6d8aa54ca6db19da3bd77c3d6aaddc38fe))

### [1.3.5](https://github.com/h-enk/hyas/compare/v1.3.4...v1.3.5) (2021-01-12)

### [1.3.4](https://github.com/h-enk/hyas/compare/v1.3.3...v1.3.4) (2021-01-12)

### [1.3.3](https://github.com/h-enk/hyas/compare/v1.3.2...v1.3.3) (2021-01-12)

### [1.3.2](https://github.com/h-enk/hyas/compare/v1.3.1...v1.3.2) (2021-01-12)


### Bug Fixes

* bump hyas version manually ([33f0e77](https://github.com/h-enk/hyas/commit/33f0e7766c0045fb0962fbbddafc2f1403c7699d))


### Documentation

* update readme ([1ce83d1](https://github.com/h-enk/hyas/commit/1ce83d17e0451d5bb881cde159df3c0db4f6cb95))


### Dependencies

* add hugo-bin extended ([f797284](https://github.com/h-enk/hyas/commit/f797284adcbfed117ef78964579425ecc4305a9e))
* bump versions to latest ([3943972](https://github.com/h-enk/hyas/commit/39439724769bb840bc4c3edc355e978ff8b0a3c3))

### [1.3.1](https://github.com/h-enk/hyas/compare/v1.3.0...v1.3.1) (2021-01-07)


### Bug Fixes

* ignore changelog for markdown linting ([6ff9909](https://github.com/h-enk/hyas/commit/6ff9909ff2637ca9a543310b115af24397bc66a9))

## [1.3.0](https://github.com/h-enk/hyas/compare/v1.2.8...v1.3.0) (2021-01-07)


### Features

* add go.mod ([e9b959f](https://github.com/h-enk/hyas/commit/e9b959f644cccea72227c8fa9316ee9815a4774f))


### Bug Fixes

* add tn.png ([684b272](https://github.com/h-enk/hyas/commit/684b27278fbd3ebfa992bf2a7c81ac40ffa78eb4))
* align with doks files ([a8e346e](https://github.com/h-enk/hyas/commit/a8e346e703d9dfce35d97c1c292da3dc0737a4db))


### Dependencies

* bump to latest versions ([ec34e28](https://github.com/h-enk/hyas/commit/ec34e28ae4de8f08f8c185e62283626ca51c2133))
* bump versions to latest ([07e74a0](https://github.com/h-enk/hyas/commit/07e74a0ed14163ae3302a74c255ae0f4701ad2f2))
* bump versions to latest ([e5654c7](https://github.com/h-enk/hyas/commit/e5654c744b1123cedef77b6cfb091dfbc22baf77))
* update to bootstrap 5 ([1393d10](https://github.com/h-enk/hyas/commit/1393d10decc3b45e7335cad817860f0e4025215d))


### Documentation

* update changelog ([e92ce94](https://github.com/h-enk/hyas/commit/e92ce9484889bcfa79a33a2d6c31f450754e9622))

## [1.2.8] - 2020-10-10

### Changed

- Change default to `enableGitInfo = false`. See also [Git fatal error](https://github.com/h-enk/hyas-cli/issues/20)

## [1.2.7] - 2020-09-29

### Added

- `./.github/ISSUE_TEMPLATE/bug-report---.md`
- `./.github/ISSUE_TEMPLATE/feature-request---.md`
- `./CODE_OF_CONDUCT.md`
- instant.page

### Changed

- `./README.md`
- bumped versions npm dpendencies

### Removed

- `./.github/CONTRIBUTING.md`
- `./scripts/clean-deps.js`
- `./scripts/copy-deps.js`

## [1.2.6] - 2020-09-17

### Changed

- `netlify.toml`
- `{{ .Site.BaseURL }}` => `{{ "/" | absURL }}`
- `absLangURL` => `absURL`
- `travis-ci.org` => `travis-ci.com`

## [1.2.5] - 2020-07-10

### Changed

- Update for default meta image

## [1.2.4] - 2020-07-09

### Changed

- Dropped Google Analytics support

## [1.2.3] - 2020-07-07

### Added

- `markdownlint-cli`
- script `lint:markdown`
- `.markdownlint.json`
- `.markdownlintignore`
- `@babel/cli`
- `@babel/core`
- `@babel/preset-env`
- `babel.config.js`
- `enableGitInfo = true` in `config/default/config.toml`
- `opengraph.html`
- `twitter_cards.html`
- `header/alert.html`
- `layouts/blog/single.html`
- `layouts/categories/list.html`
- `layouts/categories/terms.html`

### Changed

- Bumped `[build.environment]` `netlify.toml`
- `.travis.yml`
- `README.md`
- CSP in `index.headers`
- script `lint`
- added flag `--disableFastRender` to script `start`
- `baseurl` to `/` in `config/production/config.toml`
- `baseurl` to `/` in `config/staging/config.toml`
- `_images.scss`
- `default.md` and `news.md`
- `seo.html`
- `structured-data.html`
- Added `| babel` to `script-footer.html`
- Dimensions `hyas.png` to 1200 x 630
- Setup `scss`
- `layouts/_default_/baseof.html`
- `404.html`
- `img.html`

## [1.2.2] - 2020-04-17

### Added

- `[[module.mounts]]` to `config/_default/config.toml`

### Changed

- Bumped `[build.environment]` `netlify.toml`
- `.travis.yml`
- `README`
- `index.headers`
- dependencies in `package.json`

### Removed

- `copy:deps` from build command

## [1.2.1] - 2020-03-31

### Added

- version to package.json - [issue 23](https://github.com/h-enk/hyas/issues/23)
- `copy:deps` to build command - [issue 22](https://github.com/h-enk/hyas/issues/22)
- `clean:deps` command

## [1.2.0] - 2020-03-30

### Added

- ga-lite - [issue 15](https://github.com/h-enk/hyas/issues/15)
- copy script for dep resources - [issue 14](https://github.com/h-enk/hyas/issues/14)
- flag `--minify` to `build` command

### Changed

- Bumped `[build.environment]` `netlify.toml`
- Bumped dependencies `package.json`
- Update security headers - [issue 17](https://github.com/h-enk/hyas/issues/17)
- `README.md`
- `robots` tag logic in `seo.html`

### Removed

- favicon - [issue 12](https://github.com/h-enk/hyas/issues/12)

## [1.1.0] - 2020-02-06

### Added

- `<link rel="shortcut icon" href="/path/to/favicon.ico">` - [issue 12](https://github.com/h-enk/hyas/issues/12)
- breadcrumbList structured data - [issue 11](https://github.com/h-enk/hyas/issues/11)
- body classes - [issue 10](https://github.com/h-enk/hyas/issues/10)
- `.stylelintignore` - [issue 9](https://github.com/h-enk/hyas/issues/9)
- `.eslintignore` - [issue 8](https://github.com/h-enk/hyas/issues/8)

### Changed

- default theme - [issue 7](https://github.com/h-enk/hyas/issues/7)
- bumped dependency `lazysizes` to `^5.2`
- bumped dependency `HUGO_VERSION` to `0.63.2`

## [1.0.1] - 2019-12-20

### Added

- custom `layouts/rss.xml` with page option `feed_exclude: true` - [issue 5](https://github.com/h-enk/hyas/issues/5)
- content `'./content/**/*.md',` to `postcss.config.js` - [issue 2](https://github.com/h-enk/hyas/issues/2)

### Changed

- set `canonifyURLs = false` in `/config/production/config.toml` and `/config/staging/config.toml` - [issue 3](https://github.com/h-enk/hyas/issues/3)

### Removed

- `--minify` in `build` command `package.json` - [issue 4](https://github.com/h-enk/hyas/issues/4)

## [1.0.0] - 2019-12-11

### Added

- [Layouts](https://github.com/h-enk/hyas/tree/master/layouts)
- [Image](https://github.com/h-enk/hyas/blob/master/layouts/shortcodes/img.html) shortcode
- [Directories](https://github.com/h-enk/hyas#theme-structure)
- [Scripts](https://github.com/h-enk/hyas/blob/master/package.json)
- bootstrap 4.4.1
- @fullhuman/postcss-purgecss 1.3.0
- purgecss-whitelister 2.4.0
- eslint 6.7.2
- stylelint 12.0.0
- stylelint-config-standard 19.0.0
- rimraf 3.0.0
- lazysizes 5.2.0-beta1
- [Atlas](https://github.com/indigotree/atlas), Copyright (c) 2017 Indigo Tree, [MIT License](https://github.com/indigotree/atlas/blob/master/LICENSE)

[1.2.8]: https://github.com/h-enk/hyas/releases/tag/v1.2.8
[1.2.7]: https://github.com/h-enk/hyas/releases/tag/v1.2.7
[1.2.6]: https://github.com/h-enk/hyas/releases/tag/v1.2.6
[1.2.5]: https://github.com/h-enk/hyas/releases/tag/v1.2.5
[1.2.4]: https://github.com/h-enk/hyas/releases/tag/v1.2.4
[1.2.3]: https://github.com/h-enk/hyas/releases/tag/v1.2.3
[1.2.2]: https://github.com/h-enk/hyas/releases/tag/v1.2.2
[1.2.1]: https://github.com/h-enk/hyas/releases/tag/v1.2.1
[1.2.0]: https://github.com/h-enk/hyas/releases/tag/v1.2.0
[1.1.0]: https://github.com/h-enk/hyas/releases/tag/v1.1.0
[1.0.1]: https://github.com/h-enk/hyas/releases/tag/v1.0.1
[1.0.0]: https://github.com/h-enk/hyas/releases/tag/v1.0.0
