import React, {useState,useEffect} from "react";

// 렌더링을 조건적으로 하고 싶을 때 조건부 렌더링을 사용한다
// 예를 들면 로그인, 로그아웃 버튼 처럼 기존의 값에 따라
// 다른 버튼이 보여야 할 때도 있다
// 그리고 이렇게 렌더링 될 컴포넌트를 변수처럼 다루고 싶을 때
// 사용하는 것이 엘리먼트 변수입니다 말 그대로 리액트 엘리먼트를 변수처럼 다룰 때 사용됩니다.

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            로그인
        </button>
    )
}

function LogOutButton(props){
    return(
        <button onClick={props.onClick}>
            로그아웃
        </button>
    )
}

function LoginControl(props){
    const [isLogin, setIsLogin] = useState(false)

    const handleLoginClick = () => {
        setIsLogin(true)
    }

    const handleLogoutClick = () =>{
        setIsLogin(false)
    }

    let button;
    if (isLogin) {
        button = <LogOutButton onClick ={handleLogoutClick}></LogOutButton>
    }else{
        button = <LoginButton onClick ={handleLoginClick}></LoginButton>
    }

    return(
        <div>
            <p isLogin = {isLogin}></p>
            {button}
        </div>
    )
}
export default LoginControl 