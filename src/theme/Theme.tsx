import React, { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import {ThemeProvider as ThemeProviderStyled} from 'styled-components/native'
import { DarkTheme } from "./Dark";
import { LightTheme } from "./Light";
import AsyncStorage from '@react-native-async-storage/async-storage'

export enum ThemeType{
    light = 'light',
    dark = 'dark',
}

export const ThemeContext = createContext({
    theme: ThemeType.light,
    toggleTheme: () => {},
    
    
});

const themes={
    light: LightTheme,
    dark: DarkTheme
}

export const ThemeProvider = ({children}: any) =>{

    const [theme, setTheme] = useState(ThemeType.light);

    useEffect(() => {
        loadTheme();
    },[]);

    async function loadTheme(){
        const savedTheme = await AsyncStorage.getItem('@theme');
        if(savedTheme){
            setTheme(savedTheme);
        }
    }

    function toggleTheme(){
        let selectTheme;
        if (theme == ThemeType.light){
            selectTheme = ThemeType.dark
            
        }else{
            selectTheme = ThemeType.light
        }
        setTheme(selectTheme)
        AsyncStorage.setItem('@theme', selectTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProviderStyled theme={themes[theme]}>
            {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    )
   
}