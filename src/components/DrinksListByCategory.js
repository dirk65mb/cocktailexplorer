import React from 'react'
import { Link } from 'react-router-dom'

export default function DrinksListByCategory (props) {
    const drink = props.drink;

    return (

        <div className="cocktail-image">
            <li>{drink.nameOfDrink}</li>

            <Link to="/">Go back to the index</Link>
            <div>
                <img src={drink.thumbNail} alt="Drink" />) }
            </div>
        </div>
    )
}