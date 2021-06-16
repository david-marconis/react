import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = props => {
  const [year, setYear] = useState("2020");
  const expenses = props.expenses;
  const yearChangeHandler = year => {
    setYear(year);
  };
  const filteredExpenses = expenses.filter(
    expense => expense.date.getFullYear() === Number(year)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={yearChangeHandler} year={year} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
