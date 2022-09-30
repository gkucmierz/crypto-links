
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/crypto-links/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Crypto Links',
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
});
