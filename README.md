# React Sharable Components

> Boilerplate for publishing React modules with Rollup and 2 examples of its usage via create-react-app and nextJS.

Here is the [github page](https://rmanium.github.io/react-sharables) with storybook where you can demo your available components.

## Intro

_Note_: This was originally created on Oct 30 2020 (I hope the year you look at this is better than 2020!)

Inspired By [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7).

**The purpose of this boilerplate is to make publishing your own React components as simple as possible.**

## Features

I couldn't find any boilerplate like this out there that includes all these:

- Support all modern JS language features for component development out of the box
- Build process to convert source to `umd` and `es` module formats for publishing to npm or github.
- Comes with 2 `playground` apps using [nextJS](https://nextjs.org/) and [create-react-app](https://github.com/facebookincubator/create-react-app), serving 2 purposes
  - Local, hot-reload server for developing your module
  - Easily publishable to _github pages_ so users can quickly play with your module (or [surge.sh](http://surge.sh/) or [now.sh](https://zeit.co/now))
- Use [Rollup](https://rollupjs.org/) for build process and [Babel](https://babeljs.io/) for transpilation
- Allow the use of `npm` modules within your library, either as dependencies or peer-dependencies
- Support importing CSS in your components (with css modules enabled by default)
- Testing with [Jest](https://facebook.github.io/jest/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro), using `react-scripts` from `create-react-app`
- using `Storybook` to share how your components look and how to use them
- Using `react-testing-library` for the components testing
- Everything is in the latest version as of Oct 30 2020:
  - React 17.x
  - NextJS 10.x
  - Create React App 4.x
  - Babel 7.x
  - Storybook 6.x
  - React Testing Library 11.x
  - Rollup 2.x
  - Material UI 4.x

## Walkthrough

I will write a blog post soon but for now you can check the [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) that inspired me for this in the first place.

On this page, we'll give a quick rundown of the essential steps.

#### Local Development

Now you're ready to run a local version of rollup that will watch your `src/` component and automatically recompile it into `dist/` whenever you make changes.

```bash
# run playground project to start developing your new component against
npm link # the link commands are important for local development
npm install # disregard any warnings about missing peer dependencies
npm start # runs rollup with watch flag
```

We'll also be running our `playground-cra/` create-react-app that's linked to the local version of your `@rmanium/react-sharables` module.

```bash
# (in another tab)
cd playground-cra
npm link @rmanium/react-sharables
npm install
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your component in `src/` or to the playground app's `playground-cra/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

#### NPM Stuffs

The only difference when publishing your component to **npm** is to make sure you add any npm modules you want as peer dependencies to the `external` array in `rollup.config.js`. Then publish as per usual.

```bash
# note this will build `commonjs` and `es`versions of your module to dist/
npm publish
```

You can create a `.npmrc` file in your local and add `//npm.pkg.github.com/:_authToken=YOUR_TOKEN` to make the publishing process easier for yourself

#### Github Pages

Deploying the `playground-cra` to github pages is simple. We create a production build of our example `create-react-app` that showcases your library and then run `gh-pages` to deploy the resulting bundle. This can be done as follows:

```bash
npm run deploy
```

Note that it's important for your `playground-cra/package.json` to have the correct `homepage` property set, as `create-react-app` uses this value as a prefix for resolving static asset URLs.

## License

MIT © [Arman Khashei](https://github.com/rmanium)
