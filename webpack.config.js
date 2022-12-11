const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  // this tells webpack to perform cetain transformations
  // when bundling modules. The loaders like babel-loaders
  //  call those loaders to transform JSX into vanilla
  //  React.CreateElement invocations.
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  //  this helps with the resolution of importing of modules
  //  by default, imports assume that extensions are of .js
  //  this resolve property ensures that the imports of modules
  //  could also be jsx too.
  resolve: {
    extensions: [".jsx", "..."],
  },
  // these are the operations that are conducted after bundling
  // /compliation. This in essence finds the base template on
  // app/index.html and puts it in the dist/ and refers the
  // bundled JS as a defer in the index.html.
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
  ],
  mode: "development",
};
