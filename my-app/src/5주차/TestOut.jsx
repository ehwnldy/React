import React from "react";
import Welcome from "./Test";


//이런 형식으로 props를 전달하면서 출력할 수 있음

//컴포넌트의 합성은 아래 name변수를 다르게 여러 Welcome컴포넌트를 생성함으로써 
//하나의WelcomeOut컴포넌트가 여러Welcome컴포넌트를 포함하게 된 것 이것을 합성이라고 한다

//컴포넌트의 추출은 여러 컴포넌트를 포함하고있는 컴포넌트에서 하위 컴포넌트를 
//새로이 빼내어 사용하는 것 이것은 가독성과 재사용성을 높이는 데 사용됨 다른 언어로 
//비교하자면 함수는 최소 단위로 사용하는 것이 재사용성이 높다는 말과 일치함

function WelcomeOut(props){
    return(
        <Welcome name="상현"></Welcome>
    )
}
export default WelcomeOut

