import React from "react";

const style = {
    wrapper : {
        margin : 8,
        padding : 8,
        display : "flex",
        flexDirection : "row",
        border : "1px solid grey",
        borderRadius : 16
    },
    messageText : {
        color : "black",
        fontSize : 16
    }
}
// 클래스형 컴포넌트에서 state를 수정하는 방법 
// 함수형 컴포넌트는 따로 Hook이라는 개념을 사용함
// 이 생명주기 함수를 사용함에 따라 동적인 웹 사용이 가능함

class Notification extends React.Component{
    constructor(props){ // 생성자는 부모 컴포넌트의 생성자 사용
        super(props)

        this.state = {};
    }

    componentDidMount(){
        console.log(` ${this.props.id} componentDidMount() called`)
    }

    componentDidUpdate(){
        console.log(` ${this.props.id} componentDidUpdate() called`)
    }

    componentWillUnmount(){
        console.log(` ${this.props.id} componentWillUnmount() called`)
    }

    render(){
        return(
            <div style={style.wrapper}>
                <span style={style.messageText}>
                    {this.props.message}
                </span>
            </div>
        )
    }
}
export default Notification 