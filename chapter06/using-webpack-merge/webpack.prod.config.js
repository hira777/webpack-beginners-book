// webpack-mergeを読み込む
const merge = require('webpack-merge');
// 共通設定を読み込む
const baseConfig = require('./webpack.base.config.js');
// optimization.minimizerを上書きするために必要なプラグイン
const TerserPlugin = require('terser-webpack-plugin');

// 本番用の設定と共通設定（baseConfig）をマージする
module.exports = merge(baseConfig, {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'production',
  // productionモードで有効になるoptimization.minimizerを上書きする
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // consoleを削除する設定
          compress: { drop_console: true }
        }
      })
    ]
  }
});
