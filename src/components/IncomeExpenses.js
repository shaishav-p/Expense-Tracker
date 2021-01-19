import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amountsArr = transactions.map(transaction => transaction.amount);

    let income = 0;
    let expenses = 0;

    let amountsArrLen = amountsArr.length;
    for(let i=0; i< amountsArrLen; i++){
        if (amountsArr[i] > 0){
            income += amountsArr[i];
        } else {
            expenses += amountsArr[i];
        }
    }

    // make expenses positive since below we include '-' before the '$'
    expenses = expenses * -1;

    // convert to string
    income = income.toFixed(2);
    expenses = expenses.toFixed(2);


    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${ income }</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${ expenses }</p>
        </div>
      </div>
    )
}
