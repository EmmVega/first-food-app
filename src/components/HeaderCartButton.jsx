import React, { useContext, useEffect, useState } from 'react'
import classes from '../styles/HeaderCartButton.module.css';
import { FaShoppingCart } from "react-icons/fa";
import CartContext from '../store/ContextProvider';

export const HeaderCartButton = (props) => { 
    const [buttonBumper, setButtonBumper] = useState(false);
    const cartCtx = useContext(CartContext);
    var { items } = cartCtx;

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    var btnClasses = `${classes.button} ${buttonBumper ? `${classes.bump}` : ''}`;

    useEffect(() => {
        setButtonBumper(true);

        const timer = setTimeout(() => {
            setButtonBumper(false);
        }, 300);

        return () => {
            clearTimeout(timer)
        }

    },[items])


    return (
        <button className={btnClasses} onClick={props.onClick}>
            <FaShoppingCart className={classes.icon}/> 
            Your Cart
            <span className={classes.badge} >{numberOfCartItems}</span>
        </button>
    )
}
