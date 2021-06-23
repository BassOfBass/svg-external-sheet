const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {import("webpack-dev-server").Configuration}
 */
const devServerConfig = {
  host: 'localhost',
  port: 3000,
};

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: devServerConfig,
  plugins: [
    // @ts-expect-error
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[id].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ['@babel/plugin-transform-runtime']
          ]
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "assets/images/[name][ext][query]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "assets/fonts/[name][ext][query]"
        }
      },
    ]
  },
  output: {
    filename: "scripts/[name].bundle.js",
    assetModuleFilename: "assets/[name][ext][query]",
    path: path.resolve(__dirname, "dev"),
    publicPath: '/',
    clean: true
  }
}

module.exports = merge(common, config);
