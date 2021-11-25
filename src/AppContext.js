import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export const AppContextProvider = props => {
    const [quote, setQuote] = useState({});
    const [rdIndex, setRdIndex] = useState(1);
    const [bgColor, setBgColor] = useState();

    const stateValue = {
        quoteState: [quote, setQuote],
        rdIndexState: [rdIndex, setRdIndex],
        bgState: [bgColor, setBgColor]
    }
    return <AppContext.Provider value={stateValue}>
        {props.children}
    </AppContext.Provider>
}