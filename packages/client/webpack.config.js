const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, options) => {
  const isEnvDevelopment = options.mode === 'development';
  const isEnvProduction = options.mode === 'production';
  let envFilePath;

  if (isEnvDevelopment) {
    envFilePath = './.env';
  }

  if (isEnvProduction) {
    envFilePath = './.env.production';
  }

  const config = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
          resolve: {
            extensions: ['.tsx', '.ts', '.js']
          }
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.(png|jpg|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico')
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.[contentHash].css'
      }),
      new Dotenv({
        path: path.resolve(__dirname, envFilePath)
      })
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true,
      port: 3000
    }
  };

  return config;
};
