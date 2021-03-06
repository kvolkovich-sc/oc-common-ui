# oc-common-ui
* Run `npm install` to get the project's dependencies
* Run `npm run build` to produce minified version of the library
* Run `npm run dev` to produce development version of the library.
* Run `npm run test` to run tests
* Run `npm run docs` to run generate examples

### To use oc-common-ui
```javascript
import { CardContent } from 'oc-common-ui';
```
Some components needs reducers to be loaded in the redux store, those are done in the main level and are usually already there. Same goes for ocfront styles.

### Development workflow
* Run `npm run docs`
* Open `index.html`

### Development workflow with project using the package
##### Link local package to your project
* Run `npm link` at `oc-common-ui` root to make your local package linkable
* Run `npm link oc-common-ui` at project's dir that's using `oc-common-ui` to use local package
##### Build and watch the package
* Run `npm run dev` to run webpack in watch mode
##### Unlink local package
* Run `npm unlink oc-common-ui` at project's dir that's using `oc-common-ui`
* Run `npm install` to install remote copy of the `oc-common-ui` package

### Changelog
* Remember to update the CHANGELOG.md file with information about the changes to `src`

### Creating a new release tag
* Update `CHANGELOG.md` file
* Commit changes (not `lib`)
* Push changes
* Run `npm version [major|minor|patch]` [Info](https://docs.npmjs.com/cli/version)

### Trouble shooting
* If you get any errors about running many instances of certain npm libraries eg. React, check that your project's webpack is configured to resolve those conflicting packages to your projects `node_modules` directory. [Docs](https://webpack.github.io/docs/configuration.html#resolve-alias)

### Examples
* Demo implementations of the components
* Run `npm run docs` to create output to `examples-build` or `npm run hot` for using hot reload functionality

## Links

Cheatseet for [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).