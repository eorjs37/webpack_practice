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
