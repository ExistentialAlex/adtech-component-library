/* eslint-disable no-undef */
const baseConfig = require('./lint-rules/base.json');
const importConfig = require('./lint-rules/import');
const prettierConfig = require('./lint-rules/prettier.json');
const promiseConfig = require('./lint-rules/promise.json');

module.exports = {
  ...baseConfig,
  ...importConfig,
  ...prettierConfig,
  ...promiseConfig,
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['scripts'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'global-require': 1,
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: {
          consistent: true,
        },
      },
    ],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
    'no-useless-constructor': 'off',
  },
};
