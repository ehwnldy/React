import React, {useState,useEffect} from "react";

// 이는 id객체를 만들어 사용한 방식이며 index, 그 자신의 값을 문자열로 사용한 값을 키로 가질 수 있다.
const students = [
    { name : "상현", id : 1},
    { name : "준식", id : 2},
    { name : "재석", id : 3}
]
// map을 통해 스튜던츠 배열 안의 값을 ul 의 li로 출력
function AttendanceBook(props){
    return(
        <ul>
            {students.map( (student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook