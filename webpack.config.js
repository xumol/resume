//webpack的主配置文件
module.exports = {
   // mode:'development',//开发模式
    mode:'production',//产品模式
    // 1.入口entry
    entry:'./public/js/index.js',
    // 2.输出output
    output:{

        path:__dirname+'/build',
        filename:'app.js'
    },
    // 3.加载器loader--打包各种非js模块文件
       module:{
           rules:[
              //css模块文件的加载规则
              {
                  test:/\.css$/,
                  use:['style-loader','css-loader']
              }
           ]
       }
    // 4.插件plugin
}