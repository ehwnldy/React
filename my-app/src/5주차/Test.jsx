import React from "react";


// 함수형 컴포넌트 예시
function Welcome(props){
    return (
        <h1>안녕, {props.name}</h1>
    )
}


/*
//클래스형 컴포넌트 예시
class Welcome extends React.Component{
    render(){
        return(
            <h1>안녕, {this.props.name}</h1>
        )
    }
}
*/
export default Welcome;