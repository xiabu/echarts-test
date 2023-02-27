module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['warn', 'never'],
    'import/extensions': ['warn', 'never'],
    'no-return-assign': 'off',
    'no-new': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'no-nested-ternary': 'off',
    'consistent-return': 'off',
    'no-case-declarations':'off'
  },
}
