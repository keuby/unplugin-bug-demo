const { defineConfig } = require("@vue/cli-service");
const pages = require("unplugin-vue-components/webpack");
const WindicssWebpackPlugin = require("windicss-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [pages(), new WindicssWebpackPlugin()],
  },
});
