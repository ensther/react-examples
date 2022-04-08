import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';

const formatNumber = (number) => {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};

const MealItem = (props) => {
    const price = `${formatNumber(props.price)}`;
    const cartContext = useContext(CartContext);

    const addToCartHandler = (amount) => {
        const item = {...props, amount: amount};
        cartContext.add(item);
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );

};

export default MealItem;