import React , {useState,useEffect} from "react";

function Reservation(props){
    const [haveBreakfast,sethaveBreakfast] = useState(true)
    const [numOfGuest, setNumOfGuest] = useState(2);
    //여러개의 입력 다루기
    const handleSubmit = (event) => {
        alert(`아침식사 여부 ${haveBreakfast}, 방문객 수 ${numOfGuest}`)
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부 :
                <input type="checkbox"
                checked={haveBreakfast}
                onChange={(event) => {
                    sethaveBreakfast(event.target.checked)
                }}
                />
            </label>
            <br></br>
            <label>
                방문객 수 :
                <input type="number"
                value={numOfGuest}
                onChange={(event) => {
                    setNumOfGuest(event.target.value)
                }}
                />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default Reservation