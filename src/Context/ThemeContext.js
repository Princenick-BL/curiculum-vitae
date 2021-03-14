import React,{createContext,useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider= (props)=>{

    /* on initialise le dark mode à false*/
    const [theme,setTheme]= useState(false);

    const toggleTheme = ()=>{
        setTheme(!theme)
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;