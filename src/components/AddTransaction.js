import React, { useState } from 'react';

export const AddTransaction = () => {
    const [text, setText] = useState("");
     const [amount, setAmount] = useState(0);

    return(
        <>
            <h3>Add New Transaction</h3>
            <form id="list" className="list">
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