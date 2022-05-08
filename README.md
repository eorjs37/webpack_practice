# 세팅

## babel-core, babel-cli 설치
```
npm install --save-dev @babel/core @babel/cli
```

## babel 플러그인 설치
```
npm install --save-dev @babel/preset-env
```

## .babelrc 파일 생성(root폴더 밑)
```
{
  "presets": ["@babel/preset-env"]
}
``` 

## 트랜스파일링 위해 package.json에 scripts 추가
```json
{
  .
  .
  .
  "scripts": {
    "build": "babel src/js -w -d dist/js"
  },
  .
  .
  .
}
```

## 트랜스파일링 위해 명령어 실행
```
npm run build
```


## webpack 세팅
```
npm install --save-dev webpack webpack-cli
```

## babel loader 설치
babel loader를 통해 webpack이 모듈 번들링 할때 babel를 이용하여 문법 전환
```
npm install --save-dev babel-loader
```

## webapck.config.js 설정
webpack이 실행될때 실행되는 파일이다.

```javascript
const path = require('path');

module.exports = {
  // enntry file
  entry: './src/js/main.js',
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
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
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};
```


## polyfill 설치
ES6+ => ES5으로 변경하더라고 문법만 변환한것일뿐이다. 지원하지 않는 객체들를 사용할려면 polyfill 설치가 필요하다.
```
import "@babel/polyfill";
```

## main.js 추가
```javascript

//main.js
import "@babel/polyfill";
.
.
.
```

## webpack.config.js 추가
```javascript
//webpack.config.jw
module.exports = {
   entry: ['@babel/polyfill', './src/js/main.js'],
}
```

## sass 사용 할 수 있도록 추가
```
npm install node-sass style-loader css-loader sass-loader --save-dev
```

```javascript
//webpack.config.js
module.exports = {
  // enntry file
  entry: ['@babel/polyfill','./src/js/main.js', './src/sass/main.scss'],

},
module: {
  .
  .
  .
  rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JsS strings
          "css-loader",   // translates CSS into CommonJS
          "sass-loader"   // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      }
  ]
  .
  .
  .
}

```

## 컴파일된 css를 따로 css파일로 분리하기
```
npm install --save-dev mini-css-extract-plugin
```

```javascript
//webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  .
  .
  .
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'css/style.css' })
  ],
  module: {
    .
    .
    .
    {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
    }
    .
    .
    .
  }
}
```

## index.html dist폴더 밑에 만들어주기
```
npm install --save-dev html-webpack-plugin
```

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  .
  .
  .
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
```

## PostCSS Loader 구성
```
npm i postcss postcss-loader -D
```

```javascript
//webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader' /* 로더 설정 */]
      }
    ]
  }
}
```

```
npm i postcss-preset-env -D
```

```javascript
//postcss.config.js


module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        browsers: '> 5% in KR, defaults, not IE < 11',
        // CSS Grid 활성화 [false, 'autoplace', 'no-autoplace']
        autoprefixer: { grid: 'autoplace' },
      },
    ],
  ],
}
```