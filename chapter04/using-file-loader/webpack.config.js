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
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.scss$/,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, 'src/scss'),
        // 利用するローダー
        // sass-loader css-loader style-loader の順で実行される
        use: [
          // HTML に、style-loader で変換した CSS のスタイルが記述された <style> タグを追加する
          'style-loader',
          // CSS をモジュールに変換する
          'css-loader',
          // Sass を CSS にコンパイルする
          'sass-loader'
        ]
      },
      {
        // ローダーの処理対象ファイル
        test: /\.(png|jpg|gif)$/i,
        // ローダーの処理対象となるディレクトリ
        include: path.resolve(__dirname, 'src/images'),
        // 利用するローダー
        loader: 'url-loader',
        options: {
          // 画像のファイルサイズが 8 KB（8 * 1024 = 8192）以上だったら DataURL に変換せずに出力する
          limit: 8192,
          // 出力する DataURL に変換しなかった画像の名前
          // [name].[ext]　は [バンドル前のファイル名].[[バンドル前のファイルの拡張子] なので
          // 今回は background.jpg が出力される
          name: '[name].[ext]',
          // DataURL に変換しなかった画像の出力先
          // デフォルトでは output.path に指定したパス（今回は public/js）に出力される
          // 今回は public/images に出力させたいため、public/js からの相対パスを指定する
          outputPath: '../images/',
          // 出力されるファイルからの画像の読み込み先
          // 今回 public/index.html から public/images の画像を読み込みたいため、以下の指定になる
          publicPath: path => './images/' + path
        }
      }
    ]
  }
};
