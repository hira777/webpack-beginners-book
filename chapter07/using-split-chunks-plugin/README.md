# SplitChunksPlugin を利用してみる

SplitChunksPlugin を利用して共通モジュールを出力し、全体のファイルサイズを削減するサンプルコード。

## 動作環境

- Node.js: v10.16.3
- npm: v6.9.0

## 使い方

このディレクトリ上で以下のコマンドを実行してください。

```
npm install
```

その後、以下のコマンドを実行すれば、webpack が実行されてエントリーポイントから出力されたファイルと、共通モジュールがバンドルされたファイルが出力されます。

```
npm run build
```

また、以下のコマンドを実行すれば、SplitChunksPlugin を利用せずにファイルを出力します。

```
npm run build:big
```
