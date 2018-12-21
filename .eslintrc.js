module.exports = {
  'extends': [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  'rules': {
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    'react/prop-types': [0],
    'react/no-unescaped-entities': [0]
  },
  'env': {
    'es6': true,
    'node': true,
    'browser': true
  },
  'globals': {
    'React': true,
    'ReactDOM': true,
    'Promise': true,
    'd3': true,
    'NProgress': true
  },
  "parser": "babel-eslint",
  'parserOptions': {
    'sourceType': 'module'
  }
};
