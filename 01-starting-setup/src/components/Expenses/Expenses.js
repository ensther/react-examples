import './Expenses.scss';

import React, {useState} from 'react';
import Card from '../Card/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [year, setYear] = useState('');

    const setFilterHandler = (year) => {
        setYear(year);
    };

    const expensesFiltered = props.expenses.filter(e => 
        year === '' || e.date.getFullYear() === parseInt(year), []);
    
    return (
        <Card className='expenses'>
            <ExpensesFilter year={year} years={props.years} onSetFilterHandler={setFilterHandler}/>
            <ExpensesList expenses={expensesFiltered} />
        </Card>
    );
}

export default Expenses;