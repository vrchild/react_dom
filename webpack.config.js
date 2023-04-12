module.exports = {
  configureWebpack: {
    output: { // 打包输出的结果
      library: 'singleReact', // 打包输出的名字
      // eslint-ignore
      libraryTarget: 'umd' // 打包后的模块类型，-----把导出的三个属性挂载到window上
    },
    devServer: { // 开发服务
      port: 11000
    }
  }
}
