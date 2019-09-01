// output.pathに指定するパスがOSによって異なることを
// 防ぐためにpathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定
  mode: 'production',
  // エントリーポイントの設定
  entry: {
    app: './src/js/app.js',
    app2: './src/js/app2.js',
    app3: './src/js/app3.js'
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '[name].bundle.js',
    // 出力先のパス（絶対パスを指定しないとエラーが出るので注意）
    path: path.resolve(__dirname, 'public/js')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 今回のプロパティ名は vendor だが、ここは任意のもので良い
        vendor: {
          // node_modules配下のモジュールをバンドル対象とする
          test: /node_modules/,
          // 出力するファイル名
          // 今回は 'vendor' で、output.filename が '[name].bundle.js' のため、
          // vendor.bundle.js が出力される。
          name: 'vendor',
          // 共通モジュールとしてバンドルする対象の設定
          chunks: 'initial',
          // webpack はデフォルトでいくつかの splitChunks の設定が有効になる
          // これを true にすれば、それらの設定の
          // splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests, splitChunks.maxInitialRequests を無効にできる
          enforce: true
        }
      }
    }
  }
};
