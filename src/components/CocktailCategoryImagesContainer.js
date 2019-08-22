import React, {Component} from 'react';
import * as request from "superagent";
import DrinksListByCategory from "./DrinksListByCategory";

class CocktailCategoryImagesContainer extends Component {
    state = {drinks: null}

    componentDidMount() {
        const cocktailCategoryName = this.props.match.params.cocktailCategoryName
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(cocktailCategoryName)}`;
        console.log("CocktailCategoryImagesContainer :", url)
        request
            .get(url)
            .then(response => {
                console.log("CocktailCategoryImagesContainer response :", response.body)
                const drinks = response.body.drinks.map((drink => {
                    return {
                        name: drink.strDrink,
                        thumbnail: drink.strDrinkThumb,
                        id: drink.idDrink}
                    }));

                console.log("CocktailCategoryImagesContainer updateDrinks :", drinks)
                this.updateDrinks(drinks)
            })
            .catch(console.error)
    }

    updateDrinks(drinks) {
        console.log("CocktailCategoryImagesContainer updateDrinks :", drinks)
        this.setState({
            drinks: drinks
        })
    }

    render() {
        return (
            this.state.drinks && this.state.drinks.map((drink) =>
                <DrinksListByCategory drink={drink}/>
            )
        );
    }
}

export default CocktailCategoryImagesContainer;