const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  //代理
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.imooc-admin.lgdsunday.club/",
        changeOrgin: true, //是否跨域
      },
    },
  },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
