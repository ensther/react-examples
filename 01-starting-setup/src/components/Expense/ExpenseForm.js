import './ExpenseForm.scss';

import React, { useState } from 'react';

const ExpenseForm = (props) => {
    //const [titleInput, setTitleValue] = useState('');
    //const [amountInput, setAmountValue] = useState('');
    //const [DateInput, setDateValue] = useState('');
    
    const [formInput, setFormValues] = useState({
        title: '', amount: '', date: ''
    });
    const onTitleChangeHandler = (event) =>{
        //setTitleValue(event.target.value);
        //setFormValues({...formInput, amount: event.target.value});
        //Same as above but using function
        setFormValues((prevState) => {
            return {...prevState, title: event.target.value}}
        );
    };

    const onAmountChangeHandler = (event) =>{
        //setAmountValue(event.target.value);{
        setFormValues({...formInput, amount: event.target.value});
    };

    const onDateChangeHandler = (event) =>{
        //setDateValue(event.target.value);
        setFormValues({...formInput, date: event.target.value});
    };

    const onSubmitHandler = (event) =>{
        //setEnteredTitle(event.target.value);
        event.preventDefault();
        const expenseData = {
            title: formInput.title,
            amount: formInput.amount,
            date: new Date(formInput.date)            
        };

        props.onSaveExpenseData(expenseData);

        setFormValues((prevState) => {
            return {...prevState, title: ''}}
        );
        setFormValues((prevState) => {
            return {...prevState, amount: ''}}
        );
        setFormValues((prevState) => {
            return {...prevState, date:''}}
        );
    };

    return (<form className='new-expense-form' id="new-expense-form" onSubmit={onSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" name="title" placeholder="Title" required onChange={onTitleChangeHandler} value={formInput.title}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" name="amount" placeholder="Amount" min="0.01" step="0.01" required onChange={onAmountChangeHandler} value={formInput.amount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" name="date" placeholder="Date" min="01/01/2020" max="31/12/2029" required onChange={onDateChangeHandler} value={formInput.date}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button onClick={props.onCancelExpense}>Cancel</button>
            <button type='submit'>Add</button>
        </div>
    </form>);
}

export default ExpenseForm;