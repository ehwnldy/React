import React, {useState,useEffect} from "react";

// 이벤트에 매개변수를 전달하는 예제
function MyButton(props){
    const handleDelete = (id,event) =>{
        console.log(id,event.target)
    }

    return(
        // 이 코드에서 이벤트 발생 시 핸들딜리트 함수에 값을 전달한다(1)
        <button onClick={(event) => handleDelete(1,event)}>삭제</button>
    )
}

export default MyButton