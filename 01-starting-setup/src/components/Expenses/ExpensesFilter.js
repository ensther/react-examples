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
                {
                    props.years.map((y) => {
                        return (<option key={y} value={y}>{y}</option>);
                    })
                }
            </select>
        </div>
        </div>
    );
};

export default ExpensesFilter;