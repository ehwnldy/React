import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";
import React from "react";

function DarkOrLight(props){
    const [theme, setTheme] = useState("light")

    const toggleTheme = useCallback( () => {
        if (theme == 'light'){
            setTheme("dark")
        }else if( theme == 'black'){
            setTheme('light')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={ {theme, toggleTheme} }>
            <MainContent></MainContent>
        </ThemeContext.Provider>
    )
}

export default DarkOrLight