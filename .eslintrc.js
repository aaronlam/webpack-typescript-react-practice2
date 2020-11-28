const { off } = require('process');

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/unicorn',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        // 指定eslint-plugin-import解析的后缀名，出现频率高的文件类型放在前面
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    },
  },
  plugins: ['react', 'unicorn', 'promise', '@typescript-eslint'],
  rules: {
    // eslint-plugin-import和typescript搭配不能正确处理后缀名bug
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],

    // 在Windows下忽略换行符号类型
    'linebreak-style': [OFF, 'windows'],
  },
};
