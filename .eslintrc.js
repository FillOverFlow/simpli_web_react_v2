const prettierrc = require('rc')('./prettier')

module.exports = {
  extends: ['react-app'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['off', { singleQuote: true }]
  }
}
