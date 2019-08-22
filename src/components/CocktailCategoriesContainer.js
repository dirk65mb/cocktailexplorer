import React, {Component} from 'react';
import * as request from "superagent";
import CocktailList from "./CocktailList";

class CocktailCategoriesContainer extends Component {
    state= {cocktailCategoryNames: null}

    componentDidMount() {
        request
            .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then(response => {
                console.log("CocktailCategoriesContainer : ", response.body.drinks)
                const cocktailCategoryName = response.body.drinks.map((drink) => drink.strCategory);
                this.updateCocktails(cocktailCategoryName)
            })
            .catch(console.error)
    }

    updateCocktails(cocktailCategoryNames) {
        this.setState({
            cocktailCategoryNames: cocktailCategoryNames
        })
    }
    render() {
        return <CocktailList cocktailNames={this.state.cocktailCategoryNames}/>
    }
}
export default CocktailCategoriesContainer;