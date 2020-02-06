import React from 'react';

import s from './index.module.scss';
import logo from './logo.svg';


const App = () => {
  return (
    <div className={s.App}>
      <header className={s.AppHeader}>
        <img src={logo} className={s.AppLogo} alt="logo" />
        <p>
          Edit <code>src/components/App/index.js</code> and save to reload.
        </p>
        <a
          className={s.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;