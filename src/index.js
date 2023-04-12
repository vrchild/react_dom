import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import singleSpaReact from "single-spa-react";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
// import store from "./redux/store";
// import 'antd/dist/antd.css'
// import 'antd/dist/antd.min.css'

export const root = ReactDOM.createRoot(document.getElementById('root'));
// React.StrictMode 检查组建中写法不合理的东西
const reRender = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
}
reRender()
// react-redux 自动监测，  faceBook的redux需要
// store.subscribe(reRender) // 监测reducer
reportWebVitals(); // 记录页面性能


const reactLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: root
})

export const { bootstrap, mount, unmount } = reactLifeCycles
