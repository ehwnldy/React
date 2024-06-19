import React from "react";
import WelcomDialog from "./WelcomDialog";

// 합성 vs 상속
// 리액트에서 합성은 리액트 컴포넌트는 전부
// createElement()함수에 의해 변환된다
// 이 파라미터중 3번째 파라미터의 이름이 children이고 
//이는 배열 형태로 받게된다 즉 상위 컴포넌트는 여러개의 하위 컴포넌트를
// 포함할 수 있고 이를 합성이라 한다.


//이는 하위 컴포넌트를 감싸는 보더를 그린다.
//합성의 방법중 이것은 containment 즉 하위속성을 포함하는 형식이다
function FancyBorder(props){
    return(
        <div className={`FancyBorder FancyBorder-` + props.color }>
            {props.children}
        </div>
    )
}
export default FancyBorder