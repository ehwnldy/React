import React,{useState,useEffect} from "react";


// select태그는 드랍다운 버튼을 구현한다
function FruitSelect(props){

    const [value,setValue] = useState('grape')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('선택한 과일은 ' + value)
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label >
                과일을 선택하세요
                {/* 만약 목록에서 다중으로 선택되게 하려면 multiple={true} 이후 value에 배열값을 넣으면 된다 vlaue={['b','c']} */}
                <select value={value} onChange={handleChange} >
                    <option value="사과">사과</option>
                    <option value={"오렌지"}>오렌지</option>
                    <option value={"포도"}>포도</option>
                    <option value={"바나나"}>바나나</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
 }

 export default FruitSelect