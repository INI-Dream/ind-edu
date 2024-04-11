const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',  // 애플리케이션의 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // build시 dist에 bundle file 생성
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']  // 처리할 파일 확장자
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'  // HTML 기본 템플릿
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // 정적 파일 제공 폴더
    },
    compress: true,
    port: 8080  // 개발 서버 포트
  }
};
