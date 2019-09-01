# 『webpack 実践入門』

『webpack 実践入門』のサンプルコード集です。

## 3. webpack を利用してみる

- [chapter03/getting-started-webpack](chapter03/getting-started-webpack): webpack を最小構成で利用しているサンプルコード

## 4. ローダー

- [chapter04/using-babel-loader](chapter04/using-babel-loader): babel-loader を利用して ES2015+ をトランスパイルするサンプルコード
- [chapter04/using-sass-loader](chapter04/using-sass-loader): sass-loader/css-loader/style-loader を利用して Scss ファイルをバンドルするサンプルコード
- [chapter04/using-url-loader](chapter04/using-url-loader): url-loader を利用して画像をバンドルするサンプルコード
- [chapter04/using-file-loader](chapter04/using-file-loader): url-loader/file-loader を利用して、一定のサイズ未満の画像だけをバンドルするサンプルコード

## 5. プラグイン

- [chapter05/using-provide-plugin](chapter05/using-provide-plugin): ProvidePlugin を利用して指定したモジュールをすべてのファイル（モジュール）の変数として利用可能にするサンプルコード
- [chapter05/using-webpack-bundle-analyzer](chapter05/using-webpack-bundle-analyzer): webpack-bundle-analyzer を利用してバンドルに含まれているモジュールや、それぞれのモジュールのファイルサイズを出力するサンプルコード
- [chapter05/using-clean-webpack-plugin](chapter05/using-clean-webpack-plugin): clean-webpack-plugin を利用して指定したディレクトリ内のファイルをを削除するサンプルコード

## 6. webpack の様々な機能を理解して使いこなす

- [chapter06/using-multiple-entry-points](chapter06/using-multiple-entry-points):　複数のエントリーポイントからバンドルを出力するサンプルコード
- [chapter06/using-watch-mode](chapter06/using-watch-mode): watch モードを有効にし、ファイルの変更を検知して再ビルドするサンプルコード
- [chapter06/using-webpack-dev-server](chapter06/using-webpack-dev-server): 開発用サーバーである webpack-dev-server のライブリロード機能を利用したサンプルコード
- [chapter06/using-devtool](chapter06/using-devtool): ソースマップを生成するサンプルコード
- [chapter06/using-webpack-merge](chapter06/using-webpack-merge): webpack-merge を利用して開発用と本番用の設定ファイルを分けたサンプルコード

## 7. 最適化

- [chapter07/using-tree-shaking](chapter07/using-tree-shaking): Tree Shaking を利用して不要なコードを削除するサンプルコード
- [chapter07/using-split-chunks-plugin](chapter07/using-split-chunks-plugin): SplitChunksPlugin を利用して共通モジュールを出力し、全体のファイルサイズを削減するサンプルコード
