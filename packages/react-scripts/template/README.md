此项目由 [Create React App](https://github.com/facebook/create-react-app) 所创建。

## 可用的脚本

在项目目录中, 您可以运行:

### `npm start`

在开发模式下运行 app。<br>
在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看。

如果进行编辑, 页面将重新加载。<br>
您还将在控制台（console）中看到任何 lint 错误。

### `npm test`

以交互式监视模式启动测试运行器。<br>
有关详细信息, 请参阅有关 [running tests](https://facebook.github.io/create-react-app/docs/running-tests) 的部分。

### `npm run build`

将要生产的 app 构建到 `build` 文件夹。<br>
可以将 React 打包到生产模式中并优化构建并获得最佳性能。

构建的是包含 hash 值的缩小的文件。<br>
可以直接去部署。

有关详细信息, 请参阅有关[部署](https://facebook.github.io/create-react-app/docs/deployment) 的部分。

### `npm run eject`

**注意: 这是单向操作。一旦 `eject` 了, 就不能后退!**

如果构建工具和配置不能满足需求，可以随时 `eject`。 此命令将从项目中删除单个构建依赖项。

相应的，会将所有配置文件和传递依赖项（Webpack，Babel，ESLint等）复制到项目中，以便可以随便修改。除了 `eject` 之外的所有命令仍然可以工作，此时命令是指向复制的脚本，以便可以随时调整。

一般情况下不需要 `eject`，无法满足需求时才有必要 `eject`。

[替代方案](https://facebook.github.io/create-react-app/docs/alternatives-to-ejecting)：
fork react-scripts，自己修改配置，[参阅](https://auth0.com/blog/how-to-configure-create-react-app/)；

---

# 本项目已修改了部分配置。

## 支持的浏览器

已导入 [`react-app-polyfill`](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md) 用于支持 IE11 及旧版浏览器的 `polyfill`。[相关介绍](https://facebook.github.io/create-react-app/docs/supported-browsers-features#supported-browsers)

配置支持的浏览器为 [`['>0.1%', 'not dead', 'not op_mini all']`](https://browserl.ist/?q=%3E+0.1%25%2C+not+dead%2C+not+op_mini+all)。

## scss 支持

已导入 [`node-sass`](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)，用于支持 scss 编译。

已导入 [`sass-resources-loader`](https://github.com/shakacode/sass-resources-loader)，用于使每个 `scss` 导入 `src/assets/scss/core/index.scss`，可在此文件定义公用的 `scss` 变量， `mixin`， 函数等。

不要在此文件写入样式，这样会使每个 `scss` 文件重复填充相同的样式。


## 分析 Bundle 大小 （Analyzing the Bundle Size）

已导入 [`source-map-explorer`](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)，用于在构建完后，执行分析 Bundle 大小。

```shell
# 构建打包文件
npm run build

# 分析 Bundle 大小
npm run analyze
```

## 增加的 `alias`

alias | 目录
- | -
`@` | `src`
`@assets` | `src/assets`
`@scss` | `src/assets/scss`
`@scssPage` | `src/assets/scss/page`
`@scssModel` | `src/assets/scss/model`
`@images` | `src/assets/images`
`@media` | `src/assets/media`
`@components` | `src/components`
`@components` | `src/components`
`@pages` | `src/pages`
`@templates` | `src/templates`
`@common` | `src/common`


## 打包后的文件路径修改

已将打包后的文件路径改为相对路径。


## 其他

部分控制台信息改为中文

---

## 了解更多信息

您可以在 [创建 React App 文档](https://facebook.github.io/create-react-app/docs/getting-started)中了解更多信息。

要学习 React，请查阅 [React 文档](https://reactjs.org/).

### 代码拆分（Code Splitting）

本部分已移至此处: https://facebook.github.io/create-react-app/docs/code-splitting



### 创建渐进式 Web 应用（Progressive Web App - PWA）

本部分已移至此处: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### 高级配置

本部分已移至此处: https://facebook.github.io/create-react-app/docs/advanced-configuration

### 部署（Deployment）

本部分已移至此处: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` 无法缩小

本部分已移至此处: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### 环境变量

[文档](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)
[高级配置](https://facebook.github.io/create-react-app/docs/advanced-configuration)
