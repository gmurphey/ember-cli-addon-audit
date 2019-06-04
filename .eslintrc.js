module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    'node'
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended'
  ],
  env: {
    es6: true,
    node: true
  },
  rules: {
    'no-console': 0
  },
  overrides: [
    {
      files: 'tests/**/*.js',
      rules: {
        'node/no-unpublished-require': 0
      }
    }
  ]
};
