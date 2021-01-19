import React, {useState, useContext} from 'react'

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit =e => {
        e.preventDefault();
        const new_id = Math.floor(Math.random() * 100000000);
        const newTransactionObj = {
            id: new_id,
            text: text,
            amount: +amount
        }
        addTransaction(newTransactionObj);
    }

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
                     placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
