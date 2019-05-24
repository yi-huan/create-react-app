# 使用自定义的配置创建项目
使用方法：（app-name 为项目名称）

`create-react-app app-name --scripts-version yh-react-scripts`

### 增加的包
- ~~[`react-app-polyfill@1.0.1`](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md)~~ 原 `react-scripts` 已包含
  >  用于各种浏览器的 `polyfill`

- [`node-sass@4.12.0`](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)
  > `scss` 编译

- [`sass-resources-loader@2.0.0`](https://github.com/shakacode/sass-resources-loader)
  > 自动在每个 `scss` 文件头部导入 公用文件

- [`source-map-explorer@1.8.0`](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
  > 源地图资源管理器（分析打包文件大小）

### 增加的 `alias`

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

### 公用的 scss

每个 `scss` 均会导入 `src/assets/scss/core/index.scss`，可在此文件定义公用的 `scss` 变量， `mixin`， 函数等。

不要在此文件写入样式，这样会使每个 `scss` 文件重复填充相同的样式。

### 打包后的文件路径修改

已将打包后的文件路径改为相对路径。

### browserslist 更改

`production` 更改为 `['>0.1%', 'not dead', 'not op_mini all']`


---

原介绍

---

# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.
