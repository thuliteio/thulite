# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `go.mod`

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

[Unreleased]: https://github.com/h-enk/hyas/compare/v1.2.8...HEAD
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
