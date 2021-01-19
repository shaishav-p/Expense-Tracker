import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);


    let amount = transaction.amount;
    let sign;
    let liClass;

    if (amount < 0 ){
        sign = '-';
        amount = amount * -1;
        liClass = 'minus';
    } else{
        sign = '+';
        liClass = 'plus';
    }

    return (
        <li className={liClass}>
            {transaction.text} <span>{sign}${amount}</span><button className="delete-btn" 
            onClick={ () => deleteTransaction(transaction.id) }>x</button>
        </li>
    )
}
