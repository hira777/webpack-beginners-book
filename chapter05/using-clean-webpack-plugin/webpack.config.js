// clean-webpack-plugin を読み込んでおく
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定（モードを指定しないとwebpack実行時に警告が出る）
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, 'public/js')
  },
  // プラグインの設定
  plugins: [
    // clean-webpack-plugin を利用する
    // 今回、output.path に public/js を指定しているため,
    // public/js ディレクトリ内のファイルが削除されてからビルドが実行される
    new CleanWebpackPlugin()
  ]
};
