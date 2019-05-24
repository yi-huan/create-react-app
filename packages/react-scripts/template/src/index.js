// IE11 polyfill，可最低支持到 IE9
import 'react-app-polyfill/ie11';
// 自动使用 package.json 中 browserslist 指定的浏览器所需的 polyfill， IE 的需要用上面的方式指定。
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import '@scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
