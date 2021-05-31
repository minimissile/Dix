import React from 'react';
import logo from './logo.svg';
import './App.less';
import {useTranslation} from "react-i18next";

function App() {
  const {t,i18n} = useTranslation()

  const hanleChangeLang = ()=>{
    let lang = localStorage.lang || 'en'
    i18n.changeLanguage(lang === 'en' ? 'zh-CN': 'en').then(()=>localStorage.setItem('lang', lang === 'en' ? 'zh-CN': 'en'))
  }

  return (
    <div className="App">
      <header className="App-header">

        <span onClick={hanleChangeLang}>切换语言</span>

        <img src={logo} className="App-logo" alt="logo" />
        <div>{t('wallet')}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
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
