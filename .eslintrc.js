module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    // eslint와 prettier가 충돌나는 부분 비활성화 ( eslint-config-prettier )
    "prettier",
  ],
  plugins: [
    // prettier 규칙을 eslint에 적용시키게 해줌 ( eslint-plugin-prettier )
    "prettier",
    // ES2015의 import/export 구문 지원 ( eslint-plugin-import )
    "import",
  ],
  rules: {
    // prettier 규칙을 어기면 error 발생
    "prettier/prettier": ["error"],
    "no-unused-vars": "off",
  },
};
