const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');
const { PROJECT_PATH, ISANALYZE } = require('../constants');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new PurgecssWebpackPlugin({
      paths: glob.sync(`${path.resolve(PROJECT_PATH, './src')}/**/*.{tsx,less,scss,css}`, { nodir: true }),
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner:
        '/** @preserve Powered by webpack-typescript-react-practice2 (https://github.com/aaronlam/webpack-typescript-react-practice2) */',
    }),
    ISANALYZE &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'server', // 开启一个本地服务查看分析报告
        analyzerHost: '127.0.0.1', // 指定本地服务的host
        analyzerPort: 2000, // 指定本地服务的端口
      }),
  ].filter(Boolean),
});
