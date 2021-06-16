import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const [isAddingExpense, setAddingExpense] = useState();
  const saveExpenseHandler = expense => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddingExpense && (
        <button onClick={() => setAddingExpense(true)}>Add New Expense</button>
      )}
      {isAddingExpense && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={() => setAddingExpense(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
