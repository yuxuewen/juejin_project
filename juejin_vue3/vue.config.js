const fs=require('fs');
const path=require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const CompressionPlugin = require('compression-webpack-plugin');
const cdnDependencies=require('./dependencies.cdn');
const resolve=(dir)=>path.resolve(__dirname,dir)
// 获得 是否配置 GZIP 开关
const isGZIP = process.env.VUE_APP_GZIP === 'ON';
// 配置是否打开CDN
const isCDN=process.env.VUE_APP_CND==='ON';
const externals={},cdn={js:[],css:[]};
if(isCDN){
      cdnDependencies.forEach(({name,library,js,css})=>{
              externals[name]=library;
              if(js) cdn.js.push(js);
              if(css) cdn.css.push(css);
      })
}


module.exports={
    publicPath:'',
    lintOnSave: false,
    devServer:{
        open:true,
        proxy: {
            '/api': {
                target: 'http://10.100.251.54:3001/',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
               
             }
        },
    },
    
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                  modifyVars: {
                    // 通过 less 文件覆盖（文件路径为绝对路径）
                     hack: `true; @import "${resolve('src/assets/style/vant.less')}";`,
                  },
                },
              },
            postcss: {
                plugins: [
                  autoprefixer(),
                  pxtorem({
                    rootValue: 37.5,
                    propList: ['*']
                  })
                ]
          },
        
        },
      },
    configureWebpack: config => {
       
        // 打开 gzip
        if(isCDN)
        {
            config.externals=externals;
        }
        if(isGZIP)
        {
            return {
                plugins: [
                    new CompressionPlugin({
                        algorithm: 'gzip',
                        test: /\.(js|css)$/, // 匹配文件名
                        threshold: 10240, // 对超过10k的数据压缩
                        deleteOriginalAssets: false, // 不删除源文件
                        minRatio: 0.8 // 压缩比
                    })
                ]
            }
        }
    },
    pluginOptions:{
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [resolve('src/assets/style/index.less')] // less所在文件路径
          }
  
    },
    chainWebpack:config=>{
         // 设置别名
         config.resolve.alias
           .set('@',resolve('src'))
           .set('@view',resolve('src/view'))
           .set('@components',resolve('src/components'))
           .set('@router',resolve('src/router'))
           .set('@assets',resolve('src/assets'))
           .set('@api',resolve('src/api'))
           .set('@utils',resolve('src/utils'))
        config.plugin('html')
         .tap(args=>{
               if(isCDN)
               {
                   args[0].cdn=cdn;
               }
               return args;
         })

    }
    
}

