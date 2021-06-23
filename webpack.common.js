const path = require("path");
const { ContextReplacementPlugin } = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');

const { supportedLanguages } = require("./configs/derived-vars");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new ContextReplacementPlugin(
      /date\-fns[\/\\]/,
      new RegExp(`[/\\\\\](${supportedLanguages.join('|')})[/\\\\\]index\.js$`)
    ),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: "./src/pages/home.pug",
      chunks: ['index'],
    }),
    new HTMLWebpackPlugin({
      filename: "404.html",
      template: "./src/pages/404.pug",
      chunks: ['index'],
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'simple-pug-loader',
            options: {
              root: path.resolve(__dirname, "src")
            }
          }
        ]
      },
      {
        test: /\.(c|s[ac])ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          { 
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ]
      },
    ]
  },
  resolve: {
    extensions: [".js"],
    alias: {
      ["@/assets"]: path.resolve(__dirname, "src/assets"),
      ["@/components"]: path.resolve(__dirname, "src/components"),
      ["@/lib"]: path.resolve(__dirname, "src/lib"),
      ["@/pages"]: path.resolve(__dirname, "src/pages"),
      ["@/styles"]: path.resolve(__dirname, "src/styles"),
      ["@/frontend-mentor"]: path.resolve(__dirname, "src/frontend-mentor")
    },
  },
}

module.exports = webpackConfig;
