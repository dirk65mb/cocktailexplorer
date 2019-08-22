import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class CocktailList extends Component {
    renderCocktailName(cocktailName) {
        // return <li key={breed}>{breed}</li>
        return <li key={cocktailName}>
            <Link to={ `/cocktail/${cocktailName}` }>{cocktailName}</Link>
        </li>

    }

    render() {
        const { cocktailNames } = this.props
        return (
            <div className="dogs-list">
                <h1>Cocktail Categories</h1>

                { !cocktailNames && 'Loading...' }

                {
                    cocktailNames &&
                    <ul>{ cocktailNames.map(this.renderCocktailName) }</ul>
                }
            </div>
        )
    }
}