import React, {useState,useEffect} from "react";

// 유즈카운터의 파라미터로 초기값을 받고 이 초기값으로 스테이트 정의
// 이후 정의된 값을 더하기 빼기 한 값을 반환
function UseCounter(initialvalue){
    const [count,setCount] = useState(initialvalue)

    const increaseCount = () => setCount( (count) => count+1)
    const decreaseCount = () => setCount( (count) => Math.max(count-1,0))
    return (
        [count,increaseCount,decreaseCount]
    )
}

export default UseCounter