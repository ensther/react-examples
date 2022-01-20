import './ExpenseItem.scss';

function ExpenseItem(props){
    return (
        <div id={'expese-item__' + props.id} className='expense-item'>
            <p className=''>{props.date.toISOString()}</p>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <p className='expense-item__price'>{props.amount}$</p>
            </div>
        </div>
    );
}

export default ExpenseItem;