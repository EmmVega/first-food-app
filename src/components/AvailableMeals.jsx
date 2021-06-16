import React from 'react';
import { Card } from './Card';
import classes from '../styles/AvailableMeals.module.css';
import { MealItem } from './MealItem';

const menu = [
    {
       name: "Fish",
       description: "Something delicious oh yes",
       price: 19.9,
       id: 1,
    },
    {
       name: "Meat",
       description: "Something delicious oh yes",
       price: 17.9,
       id: 2,
    },
    {
       name: "Chicken",
       description: "Something delicious oh yes",
       price: 15.9,
       id: 3,
    },
 ]

export const AvailableMeals = () => {

    const mealist = menu.map((meal) => (
       <MealItem key={meal.id} price={meal.price} name={meal.name} id={meal.id} />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealist}</ul>
            </Card>
        </section>
    )
}