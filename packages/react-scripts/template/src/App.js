import React from 'react';
import logo from '@media/logo.svg';
import '@scssPage/app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          编辑 <code>src/App.js</code> 后保存以重新加载
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          学习 React
        </a>
      </header>
    </div>
  );
}

export default App;
