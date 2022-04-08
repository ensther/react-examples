import React from 'react';

import classes from './SubHeader.module.css';

import mealsImage from '../../../assets/meals.jpg';

const SubHeader = (props) => {
    
    return <React.Fragment>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="React Meals"/>
        </div>
    </React.Fragment>
}; 

export default SubHeader;