const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // enntry file
  entry: ['@babel/polyfill','./src/js/main.js', './src/sass/main.scss'],
  resolve:{
    alias: {
      '@': path.resolve(__dirname,'src/')
    },
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'img/[name][ext][query]' 
    // dont use [hash] in name
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new HtmlWebpackPlugin({
      title:'First Webpack',
      template:'./src/index.html',
      favicon:'./src/assets/favicon.png'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",   // translates CSS into CommonJS
          "sass-loader",   // compiles Sass to CSS, using Node Sass by default
          "postcss-loader"
        ],
        exclude: /node_modules/
      },
      {
        // 이미지 포멧: PNG, JP(E)G, GIF, SVG, WEBP
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource", //폴더로 관리하고 싶을때
        generator:{
          publicPath:'assets/', //url이나 main.js에 import시 assets/으로시작
          outputPath:'assets' //dist에 배출할 경우 assets폴더로 내보님
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};