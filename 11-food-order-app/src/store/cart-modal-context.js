import React from 'react';

const CartModalContext = React.createContext({
    showCart: false,
    onShowCart: () =>{},
    onHideCart: () => {}
});

export default CartModalContext;