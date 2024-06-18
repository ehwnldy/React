import React from "react";

const style = {
    wrapper : {
        padding : 16,
        display : "flex",
        flexDirection : "row",
        borderBottom : "1px solid grey"
    },
    greeting : {
        marginRight : 8
    }
}


// 커스텀 훅으로 프롭스 정보를 받은 뒤 이 정보에 따라 로그인메세지를 띄우고 버튼의 렌더링 조건을 변경한다

function Toolbar(props){
    const {isLogin, onClickLogin, onClickLogout} = props;

    return (
        <div style={style.wrapper}>
            {isLogin && <span style={style.greeting}>환영합니다.</span>}
        
            {isLogin ? (<button onClick={onClickLogout}>로그아웃</button>)
            : (
                <button onClick={onClickLogin}>로그인</button>
            )
            }
        </div>
    )
}

export default Toolbar