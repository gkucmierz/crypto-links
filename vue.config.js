
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/crypto-links/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Crypto Links',
    }
  },
  pwa: {
    name: 'Crypto Links',
    themeColor: '#FFD73F',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './src/service-worker.js',
      // ...other Workbox options...
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
});
