import React, {useRef, useState } from 'react'
import classes from '../styles/MealItemForm.module.css';
import { Input } from './Input';

export const MealItemForm = (props) => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const addToCart = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
           enteredAmount.trim().length === 0 ||
           enteredAmountNumber < 1 ||
           enteredAmountNumber > 5
        ) {
            setAmountIsValid(false); 
            return;
        }
            
        props.onAddToCart(enteredAmountNumber);
    }

    return (
       <form className={classes.form} onSubmit={addToCart}>
          <Input
             ref={amountInputRef}
             label="Amount"
             input={{
                id: "amount" + props.id,
                type: "number",
                min: "1",
                max: "5",
                defaultValue: "1",
             }}
          />
          <button>+ Add</button>
          {!amountIsValid && <p>Please, entered a valid amount (1-5)</p>}
       </form>
    );
}
