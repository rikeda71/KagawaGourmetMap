var debug = process.env.NODE_DEV !== "production";
var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: path.join(__dirname, "/src"),
  entry: ["@babel/polyfill", "./index.tsx"],
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.(png|svg)$/,
        use: "url-loader",
      },
      // js, jsx, ts, tsx
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env", "@babel/preset-typescript"],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    inline: true,
    host: "0.0.0.0",
    port: 3000,
  },
  output: {
    path: __dirname + "/src/",
    filename: "index.min.js",
  },
  plugins: debug
    ? []
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourceMap: false }),
      ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
