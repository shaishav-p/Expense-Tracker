import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amountsArr = transactions.map(transaction => transaction.amount);

    let amountsArrLen = amountsArr.length;
    let total = 0;
    for(let i=0; i< amountsArrLen; i++){
        total += amountsArr[i];
    }

    return (
        <div>
            <h5>Your Balance</h5>
            <h2 id="balance">${ total.toFixed(2) }</h2>
        </div>
    )
}
