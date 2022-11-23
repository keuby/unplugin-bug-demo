# unplugin-bug-demo

## Project setup

```
yarn install
```

## 脚手架搭建过程

1. 使用 vue create unplugin-bug-demo 创建应用
2. 安装 windicss-webpack-plugin unplugin-vue-components

## 复现过程

1. yarn install && yarn serve
2. `this content in comp` 文本颜色应该为 `text-blue-400`，而实际上现在为黑色

## 问题描述

在 `windi.config.ts` 中设置 `important` 选项为 `'#app'` 后，同时在 `.vue` 文件中使用 顶层的 `:deep()` 时是用 `@apply`，会导致 `scoped` css 编译出错

### 错误的编译原因

由于 `transformTemplateLoader` 在 `stylePostLoader` 之前执行，导致提前将 `important` 配置的选择器前缀添加到了 style 中，导致编译错误。

### 错误的编译过程

```html
<style scoped>
  :deep(.class-in-child-comp) {
    @apply text-blue;
  }
</style>
```

经过 `transformTemplateLoader` 转换成

```html
<style scoped>
  #app :deep(.class-in-child-comp) {
    --tw-text-opacity: 1;
    color: rgba(96, 165, 250, var(--tw-text-opacity));
  }
</style>
```

再由 `stylePostLoader` 转换成

```html
<style scoped>
  #app[data-v-7ba5bd90] .class-in-child-comp {
    --tw-text-opacity: 1;
    color: rgba(96, 165, 250, var(--tw-text-opacity));
  }
</style>
```

实际上应该编译成

```html
<style scoped>
  // #app 和 [data-v-7ba5bd90] 之间应该有一个空格
  #app [data-v-7ba5bd90] .class-in-child-comp {
    --tw-text-opacity: 1;
    color: rgba(96, 165, 250, var(--tw-text-opacity));
  }
</style>
```
