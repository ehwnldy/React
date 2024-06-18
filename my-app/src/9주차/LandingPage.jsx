import React, {useState,useEffect} from "react";

import Toolbar from "./Toolbar";


//결국 이 챕터의 핵심은 조건부 렌더링이며 여러 예제 전부
//조건에 따라 버튼이 비활성화 되거나 메세지가 표시되는 등의 
//동작을 한다.
function LandingPage(props){
    const [isLogin, setIsLogin] = useState(false)
    //버튼 클릭 시 로그인 트루로
    const onClickLogin = () => {
        setIsLogin(true)
    }

    const onClickLogout = () => {
        setIsLogin(false)
    }

    return(
        <div>
            <Toolbar
                isLogin={isLogin}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            ></Toolbar>
            <div style={ {padding:16} }>소플과 함께하는 리액트 공부</div>
        </div>
    )
}

export default LandingPage