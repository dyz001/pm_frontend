const { defineConfig } = require('@vue/cli-service')
// frontend/vue.config.js
// const path = require('path')
// const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   plugins: [
  //     new MonacoEditorWebpackPlugin({
  //       languages: ['json'],     // 你只用 json
  //     })
  //   ]
  // },
  // devServer: {
  //   static: {
  //     // 告诉 devServer：当请求 /vs/** 时，从 monaco-editor 的 dist 文件夹下加载
  //     directory: path.join(__dirname, 'node_modules/monaco-editor/min'),
  //     publicPath: '/vs'
  //   }
  // }
})