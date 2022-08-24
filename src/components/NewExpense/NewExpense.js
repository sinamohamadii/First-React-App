import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);

    changeFormVisibility();
  }

  const changeFormVisibility = () => {
    setFormVisibility(!formVisibility);
  }

  return (
    <div className="new-expense">
      {formVisibility && <ExpenseForm onCancelForm={changeFormVisibility} onSaveExpenseData={saveExpenseDataHandler} />}
      {!formVisibility && <button onClick={changeFormVisibility}>New Expense</button>}
    </div>
  );

}

export default NewExpense;