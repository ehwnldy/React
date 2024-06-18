import React from "react";
import Notification from "./Notification";

const reserveNotification = [{
    id : 1,
    message : "안녕하세요, 오늘의 일정 알려드립니다."
    },
    {id : 2,
    message : "점심 식사 시간"},
    {id : 3,
    message : "이제 곧 미팅 시간"}
]

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval ( () =>{
            if(notifications.length < reserveNotification.length){
                const index = notifications.length
                notifications.push(reserveNotification[index])
                this.setState({
                    notifications:notifications
                })
            }else{ // 이 setState로 배열을 비우고 종료함
                this.setState({
                    notifications:[]
                })
                clearInterval(timer)
            }
        },1000 ) 
    }

    componentWillUnmount(){
        if(timer) {
            clearInterval(timer)
        }
    }

    render(){
        return (
            <div>
                {this.state.notifications.map( (notification) => {
                    return <Notification
                     key={notification.id}
                     id={notification.id}
                     message={notification.message}></Notification>
                } )}
            </div>
        )
    }
}

export default NotificationList

/* 이거 잘 모르겠음
reserveNotification 배열:

초기에 정의된 알림 메시지들을 담고 있는 배열입니다. 각 메시지는 id와 message 속성을 가지고 있습니다.
timer 변수:

알림 메시지를 추가하고 업데이트하는 데 사용되는 setInterval 함수의 반환 값입니다.
NotificationList 클래스 컴포넌트:

constructor 메서드:

클래스가 생성될 때 초기 상태를 설정합니다. notifications 상태는 빈 배열로 초기화됩니다.
componentDidMount 메서드:

컴포넌트가 마운트된 직후 실행되는 라이프사이클 메서드입니다.
setInterval 함수를 사용하여 매 초마다 새로운 알림 메시지를 추가합니다.
notifications.length < reserveNotification.length 조건을 통해 모든 알림 메시지가 추가될 때까지 반복합니다.
각 반복마다 현재 알림 메시지의 인덱스를 확인하고, 해당 인덱스의 메시지를 notifications 배열에 추가합니다.
setState 메서드를 사용하여 상태를 업데이트하고, 이로 인해 React는 변경된 상태를 감지하여 화면을 다시 렌더링합니다.
모든 알림 메시지가 추가되면 setState({ notifications: [] })를 통해 notifications 배열을 비우고, clearInterval(timer)를 호출하여 타이머를 멈춥니다.
componentWillUnmount 메서드:

컴포넌트가 언마운트될 때 실행되는 라이프사이클 메서드입니다.
clearInterval(timer)를 호출하여 메모리 누수를 방지합니다.
render 메서드:

컴포넌트의 UI를 정의합니다.
현재 상태에 있는 notifications 배열을 매핑하여 각 알림 메시지를 <Notification> 컴포넌트로 렌더링합니다.
각 <Notification> 컴포넌트는 key prop을 가지고 있어야 하며, id와 message prop을 통해 각각의 알림 메시지를 표시합니다.
실행 순서:
컴포넌트 마운트: componentDidMount 메서드가 호출됩니다.
setInterval 실행: 매 초마다 새로운 알림 메시지를 추가하는 작업이 반복됩니다.
알림 메시지 추가: notifications 배열에 새로운 알림 메시지가 추가됩니다.
모든 알림 메시지 표시 완료: notifications.length가 reserveNotification.length와 같아지면, setState({ notifications: [] })를 통해 배열이 비워지고, clearInterval(timer)를 호출하여 타이머를 멈춥니다.
컴포넌트 언마운트: componentWillUnmount 메서드가 호출되어 clearInterval(timer)를 통해 메모리 누수를 방지합니다.
*/