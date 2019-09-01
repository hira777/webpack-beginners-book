// webpack-mergeを読み込む
const merge = require('webpack-merge');
// 共通設定を読み込む
const baseConfig = require('./webpack.base.config.js');

// 開発用の設定と共通設定（baseConfig）をマージする
module.exports = merge(baseConfig, {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'development',
  // ソースマップの設定
  devtool: 'cheap-module-eval-source-map'
});
