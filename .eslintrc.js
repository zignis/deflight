// @ts-check
/* eslint-env node */

/**
 * @type {import('eslint').Linter.Config}
 */
const options = {
  extends: [
    'eslint:recommended',
    'plugin:sort/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['sort', '@typescript-eslint'],
  root: true,
  rules: {
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort/destructuring-properties': 'error',
    'sort/export-members': 'error',
    'sort/exports': 'error',
    'sort/import-members': 'error',
    'sort/imports': 'error',
    'sort/object-properties': 'error',
    'sort/type-properties': 'error',
  },
};

module.exports = options;
