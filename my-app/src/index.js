import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



//1초 간격으로 재 생성
const root = ReactDOM.createRoot(document.getElementById('root'))
setInterval( () =>{
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
},1000)
