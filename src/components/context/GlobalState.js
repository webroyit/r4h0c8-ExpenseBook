import React, { createContext, useReducer } from 'react';

// initital state
const inititalState = {
    transactions: [
        { id: 1, text: "Check", amount: 100 }
    ]
}

// create context
export const GlobalContext = createContext(inititalState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, inititalState);

    // passing inititalState to another component
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}