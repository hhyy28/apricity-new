module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: ['warn', 'always'],
    'jsx-quotes': ['warn', 'prefer-double'],
    'object-curly-spacing': ['warn', 'always'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'block-spacing': 'warn',
    'no-console': 'warn',
    'prefer-promise-reject-errors': ['error'],
  },
};
