import './Expenses.scss';

import React, {useState} from 'react';
import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [year, setYear] = useState('');

    const setFilterHandler = (year) => {
        setYear(year);
    };
    
    return (
        <Card className='expenses'>
            <ExpensesFilter year={year} onSetFilterHandler={setFilterHandler}/>
            <div>
                {
                    props.expenses
                    .filter(e => year === '' || e.date.getFullYear() === parseInt(year))
                    .map((e,i) => {        
                        return (<ExpenseItem key={e.id} id={e.id} title={e.title} date={e.date} amount={e.amount} />);
                    })
                }
            </div>
        </Card>
    );
}

export default Expenses;