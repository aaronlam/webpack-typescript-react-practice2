const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { SERVER_HOST, SERVER_PORT } = require('../constants');
const proxySetting = require('../../src/setApiProxy');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    host: SERVER_HOST, // 指定host，不设置的话默认为localhost
    port: SERVER_PORT, // 指定端口，不设置的话默认为8080
    stats: 'errors-only', // 重点仅打印error
    compress: true, // 是否启用gzip压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: { ...proxySetting }, // 配置接口代理
  },
});
