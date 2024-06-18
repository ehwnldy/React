import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


/*
class Hello extends React.Component{
  render(){
    return <div>Hello {this.props.toWhat}</div> //이 변수는 뒤 렌더에서 대입함
  }
}

// 아래와 같은 방식으로 리액트는 엘리먼트를 생성함 이를 더 쉽게 하기 위해 jsx를 사용함
React.createElement(
  type, // 엘리먼트의 유형 <div> 같은 태그가 올 수도 있고 리액트 컴포넌트가 들어갈 수도 있음.
  [props], // props
  [...Children] // 현재 엘리먼트가 포함하고 있는 자식 엘리먼트
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  (<Hello toWhat="World" />)
);
*/

/*
const name = "소플"
const element = <h1>안녕, {name}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);
*/

/*
function formatName(user){
  return user.firstName + ' ' + user.lastName
}

const user = { // 객체 생성
  firstName : "배",
  lastName : "상현"
}

const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);

*/

// children 정의는 html 태그를 짜듯이 div태그안에 h1,h2가 있다면 이것이 children이 되는 것

