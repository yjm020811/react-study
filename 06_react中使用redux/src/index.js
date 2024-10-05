// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 编写一个组件
import App from './App'
// 给整个应用程序提供一个store
import { Provider } from 'react-redux'
import store from './store';

// 渲染App组件到页面
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
