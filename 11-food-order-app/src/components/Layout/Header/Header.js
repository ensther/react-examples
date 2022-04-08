import React from 'react';
import CartButton from './CartButton';

import classes from './Header.module.css';

const Header = (props) => {
    
    return <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <CartButton />
        </header>
    </React.Fragment>
}; 

export default Header;