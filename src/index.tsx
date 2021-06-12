import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {loadDevTools} from "jira-dev-tool";
import {AppProviders} from "./context";
import App from './App';

import './i18n';

loadDevTools(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App/>
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/**
 * 知识点:
 * React.StrictMode的作用
 *    1、识别不安全的生命周期
 *    2、关于使用过时字符串 ref API 的警告
 *    3、关于使用废弃的 findDOMNode 方法的警告
 *    4、检测意外的副作用
 *    5、检测过时的 context API
 * */
