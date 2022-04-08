import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    add: (item) => {},
    remove: (id) => {}
});

export default CartContext;