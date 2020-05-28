const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // порядок важен!
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "postcss-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$i/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[path]/[name].[ext]",
              limit: 5000,
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: false },
              pngquant: { quality: "65-90", speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devServer: {
    port: 4040,
  },
  devtool: "cheap-eval-sourse-map",
};
