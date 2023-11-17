const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.ts',
    sortWorker: './src/sortWorker.ts',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src',
          to: './',
          globOptions: {
            ignore: ['**/index.ts', '**/rickAndMorty.ts', '**/sortWorker.ts'],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
    preferRelative: true,
  },
  output: {
    // publicPath: 'public',
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
};
