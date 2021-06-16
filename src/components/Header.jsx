import React from 'react';
import classes from '../styles/Header.module.css';
import coverImage from '../images/meals.jpg';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = (props) => {
    return (
        <>
        <div className={classes.header}>
            <h1>
                Saaufé    
            </h1> 
            <HeaderCartButton onClick={props.onShowModal}/>
        </div>
        <img src={coverImage} alt="coverImage" className={classes['main-image']}/>   
        </>
    )
}
