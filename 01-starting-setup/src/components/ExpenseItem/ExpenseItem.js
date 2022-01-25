import './ExpenseItem.scss';

import React, {useState} from 'react';
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); //To update title on change automatically

    const clickHandler = (event) => {
        if(title.indexOf(', updated!') === -1)
            setTitle(title + ', updated!');
    }

    return (
        <Card id={'expese-item__' + props.id} className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <p className='expense-item__price'>{props.amount}$</p>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;