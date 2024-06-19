import React , {useState} from "react";
import styled from "styled-components";
import './Final.css'


function Final(props){

    
    const [color, setColor] = useState('purple')
    

    const handleChange = (event) => {
        setColor(event.target.value);
        
    }

    const Wrapper = styled.div`
        width : 100vw;
        height : 100vh;
        display: flex;
        background-color: ${color};
        justify-content: center;
        align-items: center;
    `
    return(
        <form className="form">
            <Wrapper>
                <label className="label">
                    Background Color : {color}
                    <input className = "input" type="text" onChange={handleChange}   />       
                </label>
            </Wrapper>
        </form>
    )

}
export default Final