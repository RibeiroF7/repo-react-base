// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es6: true, // Ou browser, se for frontend
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly', 
    SharedArrayBuffer: 'readonly', 
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx:true,
    },
    ecmaVersion: 2025,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,// para ele nao reclamar quando nao usarmos default export\
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
};