import React, {useState,useEffect} from "react";

function RequestForm(props){
    const [value, setValue] = useState('요청사항을 입력하세요')

    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항 :' + value)
        // event.preventDefault(); 란 이벤트 실행시 발생되는 새로고침을 막는 용도
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <textarea value={value} onChange={handleChange}></textarea>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default RequestForm