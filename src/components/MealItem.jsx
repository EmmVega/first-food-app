import React, { useContext } from 'react'
import CartContext from '../store/ContextProvider';
import classes from '../styles/MealItem.module.css';
import { MealItemForm } from './MealItemForm';

export const MealItem = (props) => {

   const cartCtx = useContext(CartContext);
   const AddToCartHandler = amount => {
      cartCtx.addItem({
         id: props.id,
         amount: amount,
         price: props.price,
         name: props.name
      })
   }

    return (
       <li>
          <div className={classes.meal}>
             <div>
                <h3> {props.name}</h3>
                <div className={classes.description}>
                   Here goes the description
                </div>
                <div className={classes.price}>{`$${props.price}`}</div>
             </div>

             <MealItemForm onObject={props} id={props.id} onAddToCart={AddToCartHandler}/>
          </div>
       </li>
    );
}
