const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// console.log(__dirname);

module.exports = {
  // указываем точку входа (где начинает строиться дерево зависимостей)
  entry: "./src/index.js",
  // куда положить результирующий бандл
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // загрузчики - обрабатывают доп типы файлов, применяются к каждому файлу отдельно
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        // порядок важен!
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: true,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  devServer: {
    port: 4040,
  },
  devtool: "cheap-eval-sourse-map",
};
