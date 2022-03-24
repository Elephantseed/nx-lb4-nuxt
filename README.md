# Quickstart

```shell
killall -9 node
yarn install
yarn build
yarn start
yarn ci
```

# Helpful commands

````shell
nx run nuxt-client:build
nx run back-end:build

# Intro

Enterprise-level Nx, Webpack 5, Loopback 4, Nuxt, Storybook,
and Tailwind for a frictionless development of Monorepos using
Cucumber, Gherkin, and BDD,

    no CSS was harmed in the making of this project 😇


# Quickstart

```shell
$ killall -9 node
$ yarn
$ yarn build
$ yarn ci
$ yarn start
$ open http://localhost:3000 && open http://localhost:3000/_tailwind
````

# Storybook

```shell
$ yarn run:storybook
```

# NxLb4

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Extensible Build Framework**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-lb4/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

##Useful links

- https://www.componentdriven.org/
- https://github.com/storybookjs/storybook/tree/master/addons/knobs
- https://geekflare.com/storybook-in-react/
- https://nerdcave.com/tailwind-cheat-sheet
- https://v3.nuxtjs.org/docs/usage/cli
- https://github.com/lmiller1990/vtu-next-demo
- https://storybook.js.org/blog/storybook-vue3/
- https://github.com/vuejs/pinia/discussions/833
- https://dev.to/theandrewsky/using-modules-and-pinia-to-structure-nuxt-3-app-5963
- https://stackoverflow.com/questions/59879689/jest-syntaxerror-cannot-use-import-statement-outside-a-module
- https://github.com/kulshekhar/ts-jest/issues/3034
- https://medium.com/geekculture/is-playwright-better-than-cypress-playwright-vs-cypress-151bd65a224f
- https://github.com/Tallyb/cucumber-playwright
- https://headlessui.dev

##Known issues

- https://github.com/nrwl/nx/issues/1777
- @types/jest needs to be version 25 for jest unit test to pass gracefully, it took a lot to configure it, don't touch it!!
