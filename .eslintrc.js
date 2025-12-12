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

  settings: {
    react: {
      version: '18.3',
    },
  },

  globals: {
    React: 'writable',
  },

  rules: {
    'no-console': 'error',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',

    // Allow Emotion's css prop
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      },
    ],

    // Have to disable the base rule as it can report incorrect errors:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
