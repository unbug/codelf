module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'plugins': [
    'react-hooks'
  ],
  'rules': {
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    'no-empty': [0],
    'react/prop-types': [0],
    'react/no-unescaped-entities': [0],
    'react-hooks/rules-of-hooks': 'error',
    'no-useless-escape': [0],
    'no-control-regex': [0]
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
    'NProgress': true,
    'ClipboardJS': true,
    'PR': true,
    'Mark': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  }
};
