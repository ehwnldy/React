import React, {useState,useEffect} from "react";

/*
// 클래스형 문법
class ConfirmButton extends React.Component{
    constructor(props){
        super(props)
    

        this.state = {
            isConfirmed : false
        }
        //바인딩 필수
        this.handleConfirm = this.handleConfirm.bind(this)
    }

    handleConfirm(){
        this.setState( (prevState) => ({
            isConfirmed : !prevState.isConfirmed
        }))
    }

    render(){
        return(
            <button onClick={this.handleConfirm}
            disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        )
    }
}
*/

//함수형 문법

function ConfirmButton(props){
    const [isConfirmed,setIsConfirmed] = useState(false)

    const handleConfirm = () =>{
        setIsConfirmed( (prevIsConfirmed) => !prevIsConfirmed)
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    )
}
export default ConfirmButton