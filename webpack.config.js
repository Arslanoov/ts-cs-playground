const path = require("path")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "implementations", "index.ts"),

  output: {
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  plugins: [],
}
