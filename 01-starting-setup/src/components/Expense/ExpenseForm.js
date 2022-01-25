import './ExpenseForm.scss';

import React from 'react';

const ExpenseForm = () => {
    return (<form className='new-expense-form' id="new-expense-form">
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" name="title" placeholder="Title" required />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" name="amount" placeholder="Amount" min="0.01" step="0.01" required/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" name="date" placeholder="Date" min="01/01/2020" max="31/12/2029" required/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button>Cancel</button>
            <button type='submit'>Add</button>
        </div>
    </form>);
}

export default ExpenseForm;