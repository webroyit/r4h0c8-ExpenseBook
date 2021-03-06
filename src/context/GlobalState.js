import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initital state
const inititalState = {
    transactions: []
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

    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    // passing inititalState and actions to another component
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}