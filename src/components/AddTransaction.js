import React from 'react';

export const AddTransaction = () => {
    return(
        <>
            <h3>Add New Transaction</h3>
            <form id="list" className="list">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Some Text" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        ((-) expense, (+) income)
                    </label>
                    <input type="number" placeholder="Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
};