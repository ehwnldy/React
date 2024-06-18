import React, {useState,useEffect} from "react";

// 이 코드는 리액트의 이벤트 핸들러, 이벤트 리스너를 
// 클래스형 컴포넌트로 구현하고 있습니다.
/*
class Toggle extends React.Component{
    constructor(props){
        super(props)
    
    this.state = {isToggledOn : True}
    // callback에서 this를 사용하기 위해서는 바인딩을 필수적으로 해야한다
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggledOn : !prevState.isToggledOn
        }))
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggledOn ? "켜짐" : "꺼짐"}
            </button>
        )
    }
}
*/


//함수형 컴포넌트 << 주로 사용함 으로 변환
//state를 true로 초기값 정의 후 이 값을 누를 때마다 변환
function Toggle(props){
    const [isToggledOn,setIsTogglOn] = useState(true)

    // 방법1 함수 안에 함수로 정의
    /*
    function handleClick() {
        setIsTogglOn( (isToggledOn) => !isToggledOn)
    }
    */
    // 방법2 화살표 함수로 정의
    const handleClick = () => {
        setIsTogglOn( (isToggledOn) => !isToggledOn)
    }

    return (
        <button onClick={handleClick}>
            {isToggledOn ? "켜짐" : "꺼짐"}
        </button>
    )
}
export default Toggle