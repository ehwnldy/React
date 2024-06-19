import React, { useContext } from "react";
import ThemeContext from "./ThemeContext"; // ThemeContext 파일의 경로를 정확히 지정해야 합니다.

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5em",
                backgroundColor: theme === "light" ? "white" : "black", // 삼항 연산자의 비교 연산자를 수정합니다.
                color: theme === "light" ? "black" : "white", // 글자색을 테마에 따라 다르게 설정합니다.
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트입니다.</p>
            <button onClick={toggleTheme}>변경</button> {/* 버튼 클릭 시 toggleTheme 함수를 호출합니다. */}
        </div>
    );
}

export default MainContent;
