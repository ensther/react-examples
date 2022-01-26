import React from 'react';

import './ExpensesFilter.scss';

const ExpensesFilter = (props) => {
    const onChangeHandler = (event) =>{
        props.onSetFilterHandler(event.target.value);
    };

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select onChange={onChangeHandler} defaultValue={props.year === '' ? '-' : props.year }>
                <option value='-' disabled>-</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
            </select>
        </div>
        </div>
    );
};

export default ExpensesFilter;