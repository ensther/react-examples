import './ExpensesList.scss';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = (props) => {
    if(props.expenses.length)
        return (<ul className='expenses-list'>{
            props.expenses.map(e => 
                <ExpenseItem key={e.id} id={e.id} title={e.title} date={e.date} amount={e.amount} />)
            }</ul>);
    else
        return <p className='expenses-list__fallback'>No expenses found.</p>;
};

export default ExpensesList;