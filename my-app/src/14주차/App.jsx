import React from "react";

// 컨텍스트 선언

const ThemeContext = React.createContext('light'); // createContext 함수를 사용하여 기본값을 'light'로 설정합니다.

function App(props) {
    return (
        <ThemeContext.Provider value="dark"> {/* Provider는 대문자로 시작해야 합니다. */}
            <Toolbar></Toolbar>
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemeButton></ThemeButton> {/* 태그 이름을 대문자로 변경합니다. */}
        </div>
    );
}

function ThemeButton(props) {
    return (
        <ThemeContext.Consumer>
            {value => <Button theme={value}></Button>} {/* Button 컴포넌트를 정의하지 않았으므로 예시로 표시합니다. */}
        </ThemeContext.Consumer>
    );
}

export default App; // App 컴포넌트를 내보내야 다른 파일에서 사용할 수 있습니다.
