# Adtech Component Library

This library contains a collection of vue components for use in Sky AdTech applications. The library is built and tested using typescript and has 100% coverage.

## Installing
To use the components in your vue project, simply run: `npm install @existentialalex/adtech-component-library@0.0.1`

NOTE: You may need to add the registry flag if github is not your default npm registry. `npm install @existentialalex/adtech-component-library@0.0.1 --registry=npm.pkg.github.com`


## Creating Components
We have created a script that will generate a generic Vue component, along with a storybook stories file and test file.
You can use this script using `npm run create:component <your component name>`

The script takes in almost any string and tries to convert it to the correct component name.
With that in mind, an example component would be created with: 
- filename: `vue-test-component`
- import name: `VueTestComponent`

Possible arguments that produce this are listed below:
- `vue-test-component`
- `vueTestComponent`
- `vue test component`
- `VueTestComponent`
- `VueTest-Component`
- etc...

The following options will not produce the expected result:
- `vuetestComponent`
- `VueTestcomponent`
- `vue-Testcomponent`

## Bugs
If you find a bug in one of the components or scripts, please raise an issue here: https://github.com/ExistentialAlex/adtech-component-library/issues

## Contributing
Contributions are welcome but must follow the coding guidelines for components and style guidelines for Sky AdTech.

### Running
1. Clone the repository
2. Run `npm install` / `npm i`
3. Run `npm run storybook` to see the components in action

### Testing
Run `npm run test` for a single run, or `npm run test:watch` to watch for changes to files

## Contributors
- [@ExistentialAlex](https://github.com/ExistentialAlex) (hewitsonalexander@gmail.com)
