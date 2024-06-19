import React from "react";
import FancyBorder from "./FancyBorder";

function WelcomDialog(props) {
    return(    
    <FancyBorder color="blue">
        <h1 className="dialog-title">
            어서오세요
        </h1>
        <p className="dialog-message">
            우리 사이트에 방문하신걸 환영합니다.
        </p>
    </FancyBorder>
    )


}

export default WelcomDialog