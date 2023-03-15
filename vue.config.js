const path = require("path");
const resolve = dir => path.join(__dirname, dir);
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // 项目部署的基本路径,默认假设你的应用将会部署在域名的根部,比如，https://www.vue-cli.com/
  // 如果你的应用是部署在一个子路径下，那么你需要在这里指定子路径，比如，
  // 如果你部署在 https://www.my-vue.com/my-app/; 那么将这个值改为 “/my-app/”
  publicPath: "/",
 
  // 将构建好的文件输出到哪里 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  outputDir: "dist",
 
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
 
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
 
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
 
  // 是否在开发环境下通过eslint-loader在每次保存时lint代码。这个值会在@vue/cli-plugin-eslint 被安装之后生效。
  // 设置为 true 时, eslint-loader 会将 lint 错误输出为编译警告。默认情况下， 
  // 警告仅仅会被输出到命令行，且不会使得编译失败。
  // 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。
  // 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
  lintOnSave: false,
 
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 
  // template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
 
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式
  // 转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],
 
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: true,
 
  // 向 CSS 相关的 loader 传递选项
  css: {
    // 当为true时，css文件名可省略 module 默认为 false
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    // 默认生产环境下是 true，开发环境下是 false
    extract: false,
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    sourceMap: false,
    /*为预处理器 loader 传递自定义选项*/
    loaderOptions: {
       // 没有分号会报错
       sass: {
        // data: '@import "@/assets/css/vars.scss";' //旧版sass-loader写法(8.0以下)
        additionalData: `@import "~@/styles/main.scss";` //新版scss-loader(8.0及以上)
      },
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    },
  },
 
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 
  // webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("utils", resolve("src/utils"))
      .set("api", resolve("src/api"));
  },
 
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于
  //一个内核时自动启用，仅作用于生产构建。
  parallel: require("os").cpus().length > 1,
 
  // 向 PWA 插件传递选项。
  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
 
  // 所有 webpack-dev-server 的选项都支持。
  // 注意：有些值像 host、port 和 https 可能会被命令行参数覆写。
  // 有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作。
  // 本地服务配置
  devServer: {
  },
 
  // 第三方插件选项
  // 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。
  pluginOptions: {}
};