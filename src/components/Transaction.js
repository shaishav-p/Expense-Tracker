import React from 'react'

export const Transaction = ({ transaction }) => {
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
            {transaction.text} <span>{sign}${amount}</span><button className="delete-btn">x</button>
        </li>
    )
}
