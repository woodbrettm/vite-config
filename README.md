# Vite Config Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Github Actions](https://github.com/woodbrettm/vite-config/actions/workflows/main.yml/badge.svg?branch=master)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg?style=flat)](https://code.visualstudio.com/)
[![Project Status: WIP](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
[![GitHub tag](https://img.shields.io/github/tag/woodbrettm/vite-config.svg)](https://github.com/woodbrettm/vite-config/tags/)

This template is a compilation of settings for a **[Vite](https://vitejs.dev/)** Javascript project. It focuses on keeping production code as close to the original code as possible. Currently a work in progress though useful as a reference!


| Tools          |     Configured     | Notes                                                                                                                        |
|----------------|:------------------:|------------------------------------------------------------------------------------------------------------------------------|
| ESLint         | :heavy_check_mark: | Uses `.browserslistrc` file and `engines.node` entry in `package.json` for browser + node compatibility. AirBnB styleguide.  |
| Stylelint      | :heavy_check_mark: | Browser compatibility is enforced using `.browserslistrc`. Custom style rules defined in `.stylelintrc.json`                 |
| Jest           | :heavy_check_mark: | Additional ES linting configured for Jest specifics                                                                          |
| Playwright     | :heavy_check_mark: | Similar to puppeteer. Additional ES linting configured for Playwright specifics                                              |
| Github Actions | :heavy_check_mark: | SCSS + JS linting and Jest unit + playwright tests. Configured to run on pull requests and pushes to master                  |
| SCSS           | :heavy_check_mark: | SASS should work as well                                                                                                     |
| Yarn 2         | :heavy_check_mark: | Plug n Play (PnP) is disabled in favor of node_modules for compatibility                                                    |
| VSCode         | :heavy_check_mark: | Some config settings for Stylelint                                                                                           |
| Git Hooks      | :heavy_check_mark: | ESLint & Stylelint configured to run on pre-commit                                                                           |
| Prettier       | :x:                | Code styling is enforced through ESLint and Stylelint                                                                        |
| Typescript     | :x:                | Vanilla JS used                                                                                                              |
| Babel          | :x:                | ESLint & Stylelint are configured to enforce compatibility over using Babel to transpile code                                |
| Codecov        | :x:                | Planning on adding code coverage in the future                                                                               |


## Potential Issues

### Node & Browser Compatibility

The project is configured to enforce JS compatibility using both `.browserslistrc` and the `engines.node` entry in `package.json`. This is done so they can be used as a reference, however there may be a possibility they'll conflict, since one is enforcing compatibility by browser version and the other by node version.

Depending on the target, it may be recommended to remove one of the following packages. Additionally, note the `env:` object in the `.eslintrc.json` file.

- [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) enforces browser compatibility. To remove it, uninstall the package and remove `"plugin:compat/recommended"` from your `.eslintrc.json` file under `extends:` as well as the `compat` item in the `plugins:` array.

- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) enforces node compatibility using the `engines.node` entry in `package.json`. To remove it, uninstall the package and remove `"plugin:node/recommended"` from your `.eslintrc.json` file under `extends:` as well as the `node` item in the `plugins:` array.


## Notable Files

These files contain documentaton that is helpful for referencing purposes.

| File                    | Notes                                                                      |
|-------------------------|----------------------------------------------------------------------------|
| `index-ref.html`        | Useful info like favicon tags and meta tags                                |
| `manifest.json`         | Main attributes and what they're for                                       |
| `robots.txt`            | Some notes on robots.txt                                                   |
| `sitemap_index.xml`     | How to use a sitemap_index and why use one                                 |
| `sitemap.xml`           | Sitemap schema and attributes                                              |
| `reset.scss`            | A file containing some browser CSS resets to disable unwanted behavior     |


## Vite

Vite is configured to:

- Compress assets using Brotli. GZip is another option.
- Optimize SVGs and images
- Minify for production
- Combine duplicate media queries, selectors and autoprefix styles based on the browser versions specified in `.browserslistrc`


## Installation

Run the `yarn install` command to set up the node_modules folder. If you want to try out yarn plug n play, remove
`nodeLinker: node-modules` from `.yarnrc.yml` before installing. Note the config isn't tested with that, so you'll likely need to adjust things to work.


## License

This project is [MIT licensed](./LICENSE).
