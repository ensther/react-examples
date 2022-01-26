import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expense/NewExpense";

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28)},
  {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2022, 5, 12)},
];

const DUMMY_YEARS = DUMMY_EXPENSES.reduce((acc,item)=>{
  if(!acc.includes(item.date.getFullYear())){
    acc.push(item.date.getFullYear());
  }
  return acc;
},[])



const App = () => {
  /*
  //This is the same as below code
  return React.createElement('div', {className: 'main-app'},
    React.createElement('h2', {}, "Let's get started"),
    React.createElement(Expenses, {expenses: expenses}),
  );
  */

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [years, setYears] = useState(DUMMY_YEARS);

  const addExpenseHandler = (expenseData) =>{
    setExpenses((oldExpenses) => {
      return [...oldExpenses, expenseData];
    });
    
    const year = expenseData.date.getFullYear();
    if(!years.some(y => y===year))
      setYears((oldYears) => {
        return [...oldYears, year];
      });
  };
  
  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <Expenses expenses={expenses} years={years}/>
    </div>
  );
};

export default App;
