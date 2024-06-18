import React from "react";
import Comment from "./Comment";

/*
//comment 컴포넌트를 사용해 commentList컴포넌트 구성 == 합성
function CommentList(props){
    return(// 중괄호를 안 사용해도 출력에 이상 없음 쓰는걸 권장
        // 태그로 감싸지 않으면 반환할 최상위 컴포넌트의 개수가 2개가 되기 때문에 태그로 감싸야 함 
        <div> 
            <Comment name={"배상현"} comment="안녕하세요, 배상현입니다."></Comment>
            <Comment name="유재석" comment="ㅎㅇ"></Comment>
        </div>
    )
}
*/

//map 함수를 사용해서 구현 세 번 일일히 출력하던 걸 map함수로 간편

const comments = [
    {
        name : "배상현",
        comment : "ㅎㅇㅎㅇ"
    },
    {   name : "김병만",
        comment : "ㅎㅇㅎㅇㅇㅇㄴㅁㅇ"},
    {   name : "헬로우",
        comment : "ㅎㅇㅁㄴㅇㅎㅇ"}
]

function CommentList(props){
    return(
        <div>
            {comments.map( (comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}></Comment>
                )
            })}
        </div>
    )
}

export default CommentList