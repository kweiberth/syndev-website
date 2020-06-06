module.exports = {
  parser: '@typescript-eslint/parser',

  env: {
    node: true,
    jest: true,
    es6: true,
  },

  // use of this plugin necessitates babel-eslint, which is installed as a
  // devDependency in package.json
  plugins: ['@typescript-eslint', 'react'],

  // sane defaults
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],

  globals: {
    React: 'writable',
  },

  rules: {
    'no-console': 'error',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // Have to disable the base rule as it can report incorrect errors:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
