import './Expenses.scss';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

function Expenses(props){
    return (
        <div className='expenses'>
            {
                props.expenses.map((e,i) => {        
                    return (<ExpenseItem key={e.id} id={e.id} title={e.title} date={e.date} amount={e.amount} />);
                })
            }
        </div>
    );
}

export default Expenses;