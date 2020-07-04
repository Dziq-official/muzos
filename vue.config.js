module.exports = {
  pwa: {
    name: 'Muzos',
    themeColor: '#D0021B',
    msTileColor: '#FF3131',
    manifestCrossorigin: 'anonymous',
    manifestOptions: {
      background_color: '#800000'
    }
  },

  css: {
    extract: false
  },

  chainWebpack: config => {
    config.plugins.delete('fork-ts-checker');
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => { return {...options, 'transpileOnly': false }});
  }
};
