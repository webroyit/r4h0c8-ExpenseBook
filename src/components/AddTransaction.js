import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            // + convent the string into number
            amount: +amount
        }

        addTransaction(newTransaction);

        setText("");
        setAmount(0);
    }

    return(
        <>
            <h3>Add New Transaction</h3>
            <form id="list" className="list" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Some Text" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        ((-) expense, (+) income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
};