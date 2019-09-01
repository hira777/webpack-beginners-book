// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'development',
  // エントリーポイントの設定
  entry: {
    app: './src/js/app.js',
    search: './src/js/search.js'
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    // 今回の場合 app.bundle.js と search.bundle.js が出力される
    filename: '[name].bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, 'public/js')
  }
};
