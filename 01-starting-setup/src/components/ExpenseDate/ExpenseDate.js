import './ExpenseDate.scss';

function ExpenseDate(props){
    return (
        <div className='expense-date'>               
            <div className='expense-date__year'>{props.date.toLocaleDateString(undefined, {year: 'numeric'})}</div>
            <div className='expense-date__month'>{props.date.toLocaleDateString(undefined, {month: 'long'})}</div>
            <div className='expense-date__day'>{props.date.toLocaleDateString(undefined, {day: 'numeric'})}</div>            
        </div>
    );
}

export default ExpenseDate;