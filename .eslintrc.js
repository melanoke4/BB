module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-alert': 'off',
    'react/jsx-filename-extension': 'off',
    'no-console': 'warn',
    'comma-dangle': 'warn',
    'no-debugger': 'warn',
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
  },
}