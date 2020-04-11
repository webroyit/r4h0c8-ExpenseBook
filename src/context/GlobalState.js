import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initital state
const inititalState = {
    transactions: [
        { id: 1, text: "Check", amount: 100 },
        { id: 2, text: "Water", amount: -1 }
    ]
}

// create context
export const GlobalContext = createContext(inititalState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, inititalState);

    // actions
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    // passing inititalState to another component
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}