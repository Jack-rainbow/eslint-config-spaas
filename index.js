  const rules = require('./rules/best-practices');

module.exports = {
  'root': true,

  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },

  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
};


console.log(rules);
