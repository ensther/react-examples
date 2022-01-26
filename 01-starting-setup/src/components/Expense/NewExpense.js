import './NewExpense.scss';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        const newExpense = {...expenseData, id: Math.random.toString()};
        props.onAddExpenseHandler(newExpense);
        
    };
    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>);
}

export default NewExpense;