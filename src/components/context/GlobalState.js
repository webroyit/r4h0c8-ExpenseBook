import React, { createContext, useReducer } from 'react';

// initital state
const inititalState = {
    transactions: [
        { id: 1, text: "Check", amount: 100 }
    ]
}