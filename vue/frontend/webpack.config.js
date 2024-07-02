const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // other rules...
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
