import React from "react";

const ThemeContext = React.createContext(); // 기본값은 후에 Provider를 통해 설정할 예정

ThemeContext.displayName = "ThemeContext" // 개발자 도구에서 컨텍스트의 이름확인 용도

export default ThemeContext