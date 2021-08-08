import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./NewComponentExpenses.css";

function NewComponentExpense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const expenseFilterChange = (selectedYear) => {
    // console.log('expense.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterChange={expenseFilterChange}
        />
        {props.expenses.map((expenses) => (
          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
        
      </Card>
    </div>
  );
}

export default NewComponentExpense;
