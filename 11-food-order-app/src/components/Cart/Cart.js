
import React, { useContext } from 'react';
import CartModalContext from '../../store/cart-modal-context';
import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const formatNumber = (number) => {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};

const Cart = (props) => {
    const cartModalContext = useContext(CartModalContext);
    const cartContext = useContext(CartContext);

    const totalAmount = `${formatNumber(cartContext.totalAmount)}`;
    const hasItems = cartContext.items.length > 0 ;

    const cartItemAdd = (item) => {
        cartContext.add({...item, amount: 1});
    };

    const cartItemRemove = (id) => {
        cartContext.remove(id);
    };


    const cartItems = cartContext.items.map(
        item => <CartItem key={item.id} name={item.name} 
            price={item.price} amount={item.amount} onAdd={cartItemAdd.bind(null, item)} 
            onRemove={cartItemRemove.bind(null, item.id)} />
    );
    return (
        <Modal>
            <ul className={classes['cart-items']}>{cartItems}</ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={cartModalContext.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;