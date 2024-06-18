import React , {useState,useEffect} from "react";

//인라인 if 사용법
//if문을 간결하게 사용한 것과 같다 &&로 사용
/*
function Mailbox(props){
    const unreadMessage = props.unreadMessage

    return(
        <div>
            <h1>안녕하세요</h1>
            {unreadMessage.length > 0 &&
            <h2>현재 {unreadMessage.length}개의 부재중이 있습니다.</h2>
            }
        </div>
    )
}
*/
// 인라인 if else 사용법 위와 비슷하다

// function userState(props){
//     return(
//         <div>
//             {/* 이렇게 태그 내에 조건문으로 3항연산자 사용 
//             문자열 뿐만 아닌 엘리먼트도 넣어서 사용 가능*/}
//             이 사용자는 현재 <b>
//                 {props.isLogin ? '로그인' : '로그인하지 않은'} 상태입니다.
//             </b>
//         </div>
//     )
// }

// 위는 조건부 렌더링 방법에 대해서 알아봤다
// 아래는 조건부 렌더링을 막는 방법이다 이는 null을 리턴함으로써 해결한다

function WarningBanner(props){
    // 토글 값에 따라 경고 메세지가 렌더링되지 않거나 렌더링 된다.
    if(!props.warning){
        return null;
    }

    return(
        <div>경고</div>
    )
}

function MainPage(props){
    const [showWarning,setShowWarning] = useState(false)
    // on off 교체
    const handleToggleCheck = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }
    return(
        <div>
            <WarningBanner warning={showWarning}></WarningBanner>
            <button onClick={handleToggleCheck}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    )
}

export default MainPage