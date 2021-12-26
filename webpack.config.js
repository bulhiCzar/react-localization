
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    path: './build',
    clear: true
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: {
    react: 'react',
    'react-dome': 'react-dom'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      }
    ],
  }
}
