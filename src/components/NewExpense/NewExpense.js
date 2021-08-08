import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
    const ExpenseDataHandler = (saveExpenseData) =>{
        const ExpenseData = {
            ...saveExpenseData,
            id : Math.random.toString()
        };
        console.log(ExpenseData);
        props.onAddExpense(ExpenseData);
    }

  return <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {ExpenseDataHandler} />
  </div>;
};

export default NewExpense;
