# unplugin-bug-demo

## Project setup
```
yarn install
```

## 脚手架搭建过程

1. 使用 vue create unplugin-bug-demo 创建应用
2. 安装 windicss-webpack-plugin unplugin-vue-components

## 问题描述

使用 vue-cli 初始化应用后，同时注册 windicss-webpack-plugin 和 unplugin-vue-components 插件，在执行 `yarn build` 后编译报错

报错显示为 mini-css-extract-plugin loader 的 schema 校验 options 失败，调试看上去像是使用 mini-css-extract-plugin loader 的 schema 校验了 unplugin 的 loader options