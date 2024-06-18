import React from "react";

//리액트 컴포넌트의 변경 가능한 데이터를 state라 함
//state는 자바스크립트 객체라고 기억하면 편하다

/*
//state 정의 방법
this.setState({
    key : value
})
*/

//리액트 컴포넌트의 생명주기는 
//컴포넌트가 생성될 시 마운팅(출생)되고 constructor가 실행됨
//이 생성자에 state를 정의할 수 있음
//이후 업데이트 과정에서 props의 변경, state의 변경으로 컴포넌트의 재 렌더링
//언 마운트 과정은 상위 컴포넌트에서 더이상 하위 컴포넌트를 화면에 표시하지 않을 때(사망)

