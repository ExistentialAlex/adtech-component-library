import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { toKebabCase, toPascalCase } from '../helpers/cases.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { regexLastIndexOf } from '../helpers/indexOf.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const componentIndexPath = `${__dirname}/../../src/components/index.ts`;
const componentMainPath = `${__dirname}/../../src/main.ts`;

console.log('=== Starting Component Generation ===');

const componentName = process.argv.slice(2).join('-');

if (componentName.length < 1) {
    console.error('!!!ERROR!!!: No component name provided, please provide at least one argument.')
    process.exit(1);
}

const splitComponentName = componentName.match(
  /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/gm
);
const pascalComponentName = toPascalCase(splitComponentName);
const kebabComponentName = toKebabCase(splitComponentName);
const componentTemplateFileName = 'component-template';
const componentTemplateImportName = 'ComponentTemplate';

const vueTemplateContents = readFileSync(
  `${__dirname}/templates/${componentTemplateFileName}.vue`
).toString();
const storyTemplateContents = readFileSync(
  `${__dirname}/templates/${componentTemplateFileName}.stories.ts`
).toString();

console.log(
  `1. Creating component files with name: '${kebabComponentName}'`
);
const componentStoryContents = storyTemplateContents
  .replaceAll(componentTemplateImportName, pascalComponentName)
  .replaceAll(componentTemplateFileName, kebabComponentName);

mkdirSync(`${__dirname}/../../src/components/${kebabComponentName}`);
writeFileSync(
  `${__dirname}/../../src/components/${kebabComponentName}/${kebabComponentName}.vue`,
  vueTemplateContents
);
writeFileSync(
  `${__dirname}/../../src/components/${kebabComponentName}/${kebabComponentName}.stories.ts`,
  componentStoryContents
);

console.log('2. Creating test file');
const testFileContent = readFileSync(`${__dirname}/templates/${componentTemplateFileName}.spec.ts`).toString();
const updatedTestContent = testFileContent.replaceAll(componentTemplateImportName, pascalComponentName).replaceAll(componentTemplateFileName, kebabComponentName);
mkdirSync(`${__dirname}/../../test/components/${kebabComponentName}`);
writeFileSync(`${__dirname}/../../test/components/${kebabComponentName}/${kebabComponentName}.spec.ts`, updatedTestContent);

console.log('3. Updating Index');
const indexFile = readFileSync(componentIndexPath).toString();
const updatedIndex =
  indexFile +
  `export { default as ${pascalComponentName} } from './${kebabComponentName}/${kebabComponentName}.vue';\n`;
writeFileSync(componentIndexPath, updatedIndex);

console.log('4. Updating Main');

const mainFile = readFileSync(componentMainPath).toString();

// add import
const importIndex =
  regexLastIndexOf(
    mainFile,
    /import([ \n\t]*(?:[^ \n\t\{\}]+[ \n\t]*,?)?(?:[ \n\t]*\{(?:[ \n\t]*[^ \n\t"'\{\}]+[ \n\t]*,?)+\})?[ \n\t]*)from[ \n\t]*(['"])([^'"\n]+)(?:['"])/gm
  ) + 'import { '.length;
const importToAdd = `${pascalComponentName}, `;
let updatedMain = [
  mainFile.slice(0, importIndex),
  importToAdd,
  mainFile.slice(importIndex),
].join('');

// Add install
const appInstall = 'install: (app: App) => {';
const appInstallIndex = updatedMain.indexOf(appInstall);
const installToAdd = `\n    app.component('${pascalComponentName}', ${pascalComponentName});`;
updatedMain = [
  updatedMain.slice(0, appInstallIndex + appInstall.length),
  installToAdd,
  updatedMain.slice(appInstallIndex + appInstall.length),
].join('');

// Add export
const compExport = 'export { ';
const exportIndex = updatedMain.indexOf(compExport);
const exportToAdd = `${pascalComponentName}, `;
updatedMain = [
    updatedMain.slice(0, exportIndex + compExport.length),
    exportToAdd,
    updatedMain.slice(exportIndex + compExport.length),
  ].join('');

// Write file
writeFileSync(componentMainPath, updatedMain);

console.log('=== Component Created Successfully ===');

process.exit(0);