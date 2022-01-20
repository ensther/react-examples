import './ExpenseItem.scss';

import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem(props){
    return (
        <Card id={'expese-item__' + props.id} className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <p className='expense-item__price'>{props.amount}$</p>
            </div>
        </Card>
    );
}

export default ExpenseItem;