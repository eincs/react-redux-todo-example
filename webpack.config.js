module.exports = {
  entry: {
    index: './src/index.js'
  },
  output:{
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  module: {
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}