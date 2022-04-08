import { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';

import CartModalContext from '../../../store/cart-modal-context';
import CartContext from '../../../store/cart-context';

import classes from './CartButton.module.css';

const CartButton = (props) => {
    const [btnIsHghlighted, setButtonIsHighlighted] = useState(false);
    
    const cartModalContext = useContext(CartModalContext);
    const cartContext = useContext(CartContext);

    const {items} = cartContext;

    const cartItems = items.reduce(
        (currentNumber, item) => {
            return currentNumber + parseInt(item.amount);
        }, 0);

    const buttonClasses = `${classes.button} ${btnIsHghlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length !== 0)
            setButtonIsHighlighted(true);
        else
            return;
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={buttonClasses} onClick={cartModalContext.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{cartItems}</span>
        </button>
    );
}; 

export default CartButton;