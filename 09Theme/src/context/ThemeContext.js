import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themecolor: 'light' ,
    darktheme: () => {} ,
    lighttheme: () => {} ,
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}