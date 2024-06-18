import React, {useState, useEffect} from "react";
import UseCounter from "./UseCounter";

const MAX_CAPACITY = 10;

// 커스텀 훅은 함수와 같이 사용된다 같은 useState를 여러번 사용한다면 이 state를 하나의 커스텀 훅으로 묶어서 사용하면 유지보수에 용이하다.
function Accommodate(props){
    const [isFull,setIsFull] = useState(false)
    const [count,increaseCount,decreaseCount] = UseCounter(0);

    useEffect( () => {
        console.log("============")
        console.log("useEffect() is called")
        console.log(`isFull: ${isFull}`)
    })

    useEffect( () => {
        setIsFull(count >= MAX_CAPACITY)
        console.log(`Current count value : ${count}`)
    },[count])

    return (
        <div>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            {/* isFull이 true일 때 까지 증가 */}
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {/* isFull이 true일 시  */}
            {isFull && <p>정원이 가득 찼습니다</p>}
        </div>
    )
}

export default Accommodate