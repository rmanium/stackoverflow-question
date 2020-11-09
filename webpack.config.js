var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // mode: 'production',
  entry: { index: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      comps: './src/components',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: '.',
          globOptions: {
            ignore: [
              '**/*.stories.js',
              '**/stories/**',
              '**/setupTests.js',
              '**/node_modules/**',
              '**/playground-cnp/**',
              '**/package-lock.json',
              '**/.git',
              '**/.npmrc',
              '**/dist',
              '**/.storybook',
            ],
          },
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  module: {
    rules: [
      // I dont need this, cant I not use module at all? just want the copy and paste part for now
      {
        test: /\.(js|jsx)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
    // rules: [ // NO NEED
    //   {
    //     test: /\.(js|jsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: 'babel-loader',
    //     },
    //   },
    // ],
  },
  optimization: {
    minimize: false,
  },
};
