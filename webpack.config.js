var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/scripts/app.js", //relative to root of the application
    output: {
        filename: "./dist/app.bundle.js" //relative to root of the application
    },

    module:{
      rules:[
        {
          test:/\.(s*)css$/, 
          use: ExtractTextPlugin.extract({ 
            fallback:'style-loader',
            use:[
              { 
                loader: 'css-loader', 
                options: { 
                  sourceMap: true 
                } 
              },

              { 
                loader: 'postcss-loader',
                options: { 
                  ident: 'postcss',
                  sourceMap: true,
                  plugins: (loader) => [
                    require('postcss-import')({ root: loader.resourcePath }),
                    require('autoprefixer'),
                    require('cssnano')({
                        preset: 'default',
                    }),
                    require('postcss-cssnext')
                  ],
                  config: {
                    path: './postcss.config.js',
                    ctx: {
                      cssnext: {},
                      cssnano: {},
                      autoprefixer: {}
                    }
                  }
                }
              },

              { 
                loader: 'sass-loader', 
                options: {
                  importLoaders: 1,
                  sourceMap: true 
                } 
              }
            ],
        })
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [
            {
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: './dist/images/[hash]-[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
    ]},

    resolve: { extensions: [".js", ".ts"] },

    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 9000
    },

    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Locastic Front End Task',
            template: './src/index.html',
            filename: './dist/index.html'
        }),

        new ExtractTextPlugin({filename:'./dist/css/style.bundle.css'}),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),

        new UglifyJsPlugin({
          test: /\.js($|\?)/i,
          uglifyOptions: {
              debug: true,
              minimize: true,
              sourceMap: true,
              output: {
                  comments: false
              },
              compress: {
                  warnings: false
              }
          }
      })
    ]
}