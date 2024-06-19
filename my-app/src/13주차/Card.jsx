import React, {useState} from "react";

// Card컴포넌트는 하위 컴포넌트를 감싸서 꾸며주는 컴포넌트

function Card(props){

    const {title, backgroundColor, children} = props;


    return(
        <div
        style={{
            margin : 8,
            padding : 8,
            borderRadius : 8,
            boxShadow : 8,
            backgroundColor : backgroundColor || "white"
        }}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    )
}

export default Card