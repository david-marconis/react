import { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  { id: 1, title: "Car insurance", amount: 38.2, date: new Date(2021, 2, 3) },
  { id: 2, title: "Books", amount: 10.5, date: new Date(2020, 6, 22) },
  { id: 3, title: "New phone", amount: 150.8, date: new Date(2018, 11, 24) },
  { id: 4, title: "Toilet paper", amount: 5.0, date: new Date(2021, 4, 9) },
];
const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
