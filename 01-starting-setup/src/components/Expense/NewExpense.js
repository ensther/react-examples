import './NewExpense.scss';

import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    
    const saveExpenseDataHandler = (expenseData) => {
        const newExpense = {...expenseData, id: Math.random.toString()};
        props.onAddExpenseHandler(newExpense);
        setShowForm(showForm => !showForm);
    };

    const changeShowFormHandler = (event) => {
        setShowForm(showForm => !showForm);
    };

    if(showForm)
        return (<div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={changeShowFormHandler}/>
        </div>);
    else
        return (<div className='new-expense'>
                    <div className='new-expense__actions'>
                        <button onClick={changeShowFormHandler}>Add new Expense</button>
                    </div>
                </div>);
}

export default NewExpense;