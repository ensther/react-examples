import React, {useState} from 'react';
import CartModalContext from './cart-modal-context';

export const CartModalContextProvider = (props) => { 
    const [showCart, setShowCart] = useState(false); 
    
    const showCartHandler = () => {
        setShowCart(true);
    };

    const hideCartHandler = () => {
        setShowCart(false);
    };

    return <CartModalContext.Provider value={{
        showCart: showCart,
        onShowCart: showCartHandler,
        onHideCart: hideCartHandler
    }}>{props.children}</CartModalContext.Provider>
};

export default CartModalContextProvider;