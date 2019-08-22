import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router";
import CocktailCategoriesContainer from "./components/CocktailCategoriesContainer";
import CocktailCategoryImagesContainer from "./components/CocktailCategoryImagesContainer";

class App extends Component {
    render() {
      return (
          <div className="App">
            {/*<Cocktail Explorer />*/}
            <Route exact path="/" component={CocktailCategoriesContainer}/>
            <Route exact path="/cocktail/:cocktailCategoryName" component={CocktailCategoryImagesContainer}/>
          </div>
      );
    }
  }

  export default App;
