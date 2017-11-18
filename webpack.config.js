const webpack = require("webpack");
const path = require("path");

const DEV = path.resolve(__dirname+"/app");
const OUTPUT = path.resolve(__dirname+"/public");

const config = {
  entry: DEV + "/index.js",
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: 'public',
    historyApiFallback: true
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'app/lib/assets'),
      components: path.resolve(__dirname, 'app/lib/components'),
      scss: path.resolve(__dirname, 'app/scss'),
      utils: path.resolve(__dirname, 'app/lib/utils.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins:[
      	    'transform-class-properties',
            'transform-async-to-generator',
      	    // This is for async, await on the front end.
      	    'transform-runtime'
      	  ],
        }
      },
      {
        test: /\.sass?$/,
        loader: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.scss?$/,
        loader: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.css?$/,
        loader: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
    ],
  }
};

module.exports = config;
