module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never'],
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    // 'object-curly-spacing': ['error', 'never'],
    'arrow-parens': 'off',
    "linebreak-style": 0,
    "comma-dangle": ["error", "never"],
    "no-unused-expressions": 'off',
    "operator-linebreak": 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
