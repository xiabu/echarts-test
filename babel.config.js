let proPlugins = []
// 生产环境，去掉console
if (process.env.NODE_ENV === 'production') {
  proPlugins.push('transform-remove-console');
}

module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset',
    ['@vue/app', { useBuiltIns: 'entry' }],
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
    ...proPlugins
  ]
}
