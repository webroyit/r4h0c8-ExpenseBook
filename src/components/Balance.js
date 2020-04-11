import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // to get the total amount on the transactions
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((total, item) => (total += item), 0).toFixed(2);

    return(
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    );
};