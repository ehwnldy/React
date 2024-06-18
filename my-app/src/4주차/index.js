import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
// 틱 함수에 현재시간을 표시하는 태그 대입
function tick() {
  const element = (
    <div>
      <h1>안녕 리액트</h1>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  element
)
} // 틱 함수 1000ms 반복 조절
setInterval(tick, 1000);
*/

// Clock.jsx을 임포트한 App을 1초 간격으로 재 생성
const root = ReactDOM.createRoot(document.getElementById('root'))
setInterval( () =>{
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
},1000)
