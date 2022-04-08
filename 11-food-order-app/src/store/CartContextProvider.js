import React, {useReducer} from 'react';

import CartContext from './cart-context';

const defCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const existItemInCart = state.items.findIndex(item => item.id === action.item.id);
        let updatedItem = null;
        let updatedItems = null;
        if(existItemInCart >= 0){
            updatedItem = {...state.items[existItemInCart],
                amount:  state.items[existItemInCart].amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existItemInCart] = updatedItem;
        }else
            updatedItems = state.items.concat(action.item);
        
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }else if(action.type === 'DELETE'){
        const existItemInCart = state.items.findIndex(item => item.id === action.id);
        let updatedItem = null;
        let updatedItems = null;
        if(existItemInCart >= 0){
            updatedItem = {...state.items[existItemInCart],
                amount:  state.items[existItemInCart].amount - 1
            };
            updatedItems = [...state.items];
            if(updatedItem.amount > 1) updatedItems[existItemInCart] = updatedItem;
            else updatedItems = state.items.filter(item => item.id !== action.id);
        }
        const newTotalAmount = state.totalAmount - updatedItem.price;
        
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }

    return defCartState;
};

export const CartContextProvider = (props) => { 
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defCartState);   

    const addItemHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item});
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({type: "DELETE", id: id});
    };

    return <CartContext.Provider value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        add: addItemHandler,
        remove: removeItemHandler
    }}>{props.children}</CartContext.Provider>
};

export default CartContextProvider;