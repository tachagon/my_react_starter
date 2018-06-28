const path = require('path');

module.exports = {
    mode: 'development',

  entry: {
    app: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
        {
            test: /\.(js|jsx)$/, // include .js files
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
                loader: "babel-loader"
            }]
        },
        {
            test: /\.less/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loder"},
                {loader: "less-loader"}
            ]
        }
    ]
  },
};