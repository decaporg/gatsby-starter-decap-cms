# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## Setup

> Install yarn on your system: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install dependencies

> Only required on the first run, subsequent runs can use `yarn` to both
bootstrap and run the development server using `yarn develop`.
Since this starter using the [netlify-lambda](https://github.com/netlify/netlify-lambda), there could be further issues you, please check the [Readme](https://github.com/netlify/netlify-lambda) for further information and set up questions. 

```sh
$ git clone https://github.com/netlify-templates/gatsby-starter-netlify-cms
$ yarn 
```

## Available scripts

### `start`

Starts the development server. This task runs both the `start:app` and `start:lambda` scripts.

#### Usage

```sh
$ yarn start
```

### `build`

Build the static files into the `public` folder, turns lambda functions into a deployable form. This task runs both the `build:app` and `build:lambda` scripts.

#### Usage

```sh
$ yarn build
```

### `clean`

Removes all the files from `public`, `.cache` directories using the `rimraf` command.

#### Usage

```sh
yarn clean
```

### `develop`

Runs the `clean` script and starts the gatsby develop server using the command `gatsby develop`. Since this is not starting the lambda server it can be used when you only changing the site and not the lambda functions.

#### Usage

```sh
yarn develop
```

### `serve`

This command is shorthand for `gatsby serve` 

#### Usage

```sh
yarn serve
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

### `start:app`

Runs the `develop` command, this mapping is needed so we can start both gatsby and lambda with one command (`yarn start`).

#### Usage

```sh
yarn start:app
```

### `start:lambda`

Runs the `netlify-lambda` command, starts the lambda server in develop mode.

#### Usage

```sh
yarn start:lambda
```

### `build:app`

Builds the gatsby app

#### Usage

```sh
yarn build:app
```

### `build:lambda`

Runs the `netlify-lambda build` command, compiles the functions.

#### Usage

```sh
yarn build:lambda
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
