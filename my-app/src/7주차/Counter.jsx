import React, {useEffect, useState} from "react";

/*
Hook은 함수형 컴포넌트에서 State를 관리하는 방법이다
갈고리를 걸어 이때는 이거 이때는 이거 식으로 실행한다.
*/



function Counter(props){

    // 이렇게 사용하면 화면에 재 렌더링이 되지 않아 항상 0이 보일 것
    //var count = 0;
    

    //이렇게 훅을 사용 useState : state선언
    //훅은 const [변수명, set함수명] =useState(초기값) 으로 초기화한다.
    const [count,setCount] = useState(0);

    //useEffect는 sideEffcet를 관리한다 이는 실행중 부가적으로 실행되는 부작용을 일반적으로 일컫지만
    //리액트에서는 그냥 부가효과가는 의미로 생명주기의 대부분을 이것으로 관리한다.
    //componentDidMount, Update와 비슷하게 작동
    useEffect( () => {
        document.title = `총 ${count}번 클릭했습니다.`
    })

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            {/* 화살표 함수식으로 익명함수 사용 */}
            <button onClick={()=> setCount(count+1)}>클릭</button>
        </div>
    )
}

export default Counter