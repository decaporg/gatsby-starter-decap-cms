# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## Setup

> Install yarn on your system: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install dependencies

> Only required on the first run, subsequent runs can use `yarn` to both
bootstrap and run the development server using `yarn develop`.
Since this starter using the [netlify-dev](https://www.netlify.com/products/dev/#how-it-works), there could be further issues you, please check the [netlify-dev](https://github.com/netlify/netlify-dev) repository for further information and set up questions. 

```sh
$ git clone https://github.com/netlify-templates/gatsby-starter-netlify-cms
$ yarn 
```

## Available scripts


### `build`

Build the static files into the `public` folder, turns lambda functions into a deployable form. 

#### Usage

```sh
$ yarn build
```

### `clean`

Runs `gatsby clean` command.

#### Usage

```sh
yarn clean
```

### `netlify dev`

Starts the netlify dev environment, including the gatsby dev environment.
For more infor check the [Netlify Dev Docs](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)

```sh
netlify dev
```

### `develop` or `start`

Runs the `clean` script and starts the gatsby develop server using the command `gatsby develop`. We recomend using this command when you don't need Netlify specific features

#### Usage

```sh
yarn develop
```
### `test`

Not implmented yet

#### Usage

```sh
yarn test
```

### `format`

Formats code and docs according to our style guidelines using `prettier`

#### Usage

```sh
yarn format
```


## Pull Requests

We actively welcome your pull requests!

If you need help with Git or our workflow, please ask on [Gitter.im](https://gitter.im/netlify/NetlifyCMS). We want your contributions even if you're just learning Git. Our maintainers are happy to help!

Netlify CMS uses the [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) + [Feature Branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Additionally, PR's should be [rebased](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) on master when opened, and again before merging.

1. Fork the repo.
2. Create a branch from `master`. If you're addressing a specific issue, prefix your branch name with the issue number.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Run `yarn test` and ensure the test suite passes. (Not applicable yet)
5. Use `yarn format` to format and lint your code.
6. PR's must be rebased before merge (feel free to ask for help).
7. PR should be reviewed by two maintainers prior to merging.

## License

By contributing to the Gatsby - Netlify CMS starter, you agree that your contributions will be licensed
under its [MIT license](LICENSE).
