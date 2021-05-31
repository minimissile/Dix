import React from 'react';
import './App.less';
import {UnauthenticatedApp} from "./unauthenticated-app";

// import {useTranslation} from "react-i18next";

function App() {
  // const {t,i18n} = useTranslation()
  //
  // const hanleChangeLang = ()=>{
  //   let lang = localStorage.lang || 'en'
  //   i18n.changeLanguage(lang === 'en' ? 'zh-CN': 'en').then(()=>localStorage.setItem('lang', lang === 'en' ? 'zh-CN': 'en'))
  // }

  const user = false

  return (
    <div className="App">
      {!user ? <UnauthenticatedApp/> : null}
    </div>
  );
}

export default App;
