import { useState } from "react";
import React, {useEffect} from "react";

// html에서의 폼과 리액트에서의 폼은 조금 다르다 물론 같은 작동을 하지만
// 리액트에서는 state를 통해 관리하기 때문에 같은 태그로 값을 받아도
// 이를 각각 태그에서의 state를 제어하는 것보다 하나의
// 제어 컴포넌트에서 이를 관리한다 이 편이 더 쉽다.
// 아래는 그 예시이다.

function NameForm(props){
    const [value, setValue] = useState('')
    // 이벤트 핸들러 : 인풋 태그에서 받은 값을 스테이트에 관리
    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase())
        event.preventDefault();
    }

    return(
        <form>
            <label>
                이름:
                <input type="text" value={value} onChange={handleChange}>
                </input>
            </label>
            <button type="submit">제출</button>
        </form>
    )

}

export default NameForm