import { useRef, useState } from 'react';
import Input from '../../UI/Input/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const inputProps = {id:`units-${props.id}`, type:"number", name:"units", min:1, max:10, step: 1, defaultValue: 1} ;
    
    const [amountValid, setAmountValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = +(amountInputRef.current.value);
        if(enteredAmount < 0 || enteredAmount > 10){
            setAmountValid(false);
            return;
        }
        setAmountValid(true);
        props.onAddToCart(enteredAmount);
        return;
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Units" input={inputProps}/>
            <button>Add cart</button>
            {!amountValid && <p>Please enter a valid amount (1-10).</p>}
        </form>
    );
};

export default MealItemForm;