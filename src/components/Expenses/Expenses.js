import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'; 

/*This compnent encomposes all the date from "ExpenseDate" funneled into "ExpenseItem" to then be placed neatly inside a box that holds each item and calls 
out to the expenses data provided in the App.js file*/
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
};

const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});

  return  (
    <div>
      <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;