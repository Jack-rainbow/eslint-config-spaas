const rules = require('./rules');

module.exports = {
  'root': true,

  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },

  'parserOptions': {
    ecmaVersion: 5,
    sourceType: 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },

  rules: rules
};
