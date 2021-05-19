import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import SearchRecipes from '../Search/SearchRecipes';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './RecipesList.css';

class RecipesList extends Component {
    state = {
        recipes: [],
        isLoading: false,
        searchInput: "",
    }

    componentDidMount() {

        this.setState({ isLoading: true });

        fetch("http://localhost:3001/recipes")
            .then(res => res.json())
            .then(res => this.setState({ recipes: res, isLoading: false }));

    }

    searchHandler = (e) => {
        this.setState({
            searchInput: e.target.value
        });
    }

    clearHandler = (e) => {
        this.setState({
            searchInput: '',
        });
    }

    render() {
        const filteredResult = this.state.recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
        });

        const recipeList = filteredResult.map(recipe => {
            return (
                <RecipeCard
                    key={recipe.id}
                    name={recipe.name}
                    origin={recipe.origin}
                    cookTime={recipe.cookTime}
                    image={recipe.image}
                    desc={recipe.desc}
                    url={recipe.id}
                />
            );
        });

        return (
            <>
                <div className="search-area">

                    <h3>Find Your Recipe</h3>
                    <SearchRecipes searchInput={this.searchHandler} searchValue={this.state.searchInput} />
                </div>

                {filteredResult.length === 0 && (
                    <div className="search-empty">
                        <h1>Nothing Found</h1>
                        <div className="search-empty-btn">
                            <LinkContainer to="/recipes">
                                <Button type="reset" onClick={this.clearHandler} variant="warning">View All Recipes</Button>
                            </LinkContainer>
                            <LinkContainer to="/add-new-recipe">
                                <Button variant="outline-warning">Add New Recipe</Button>
                            </LinkContainer>
                        </div>
                    </div>
                )}
                <div className="cards">
                    {recipeList}
                </div>
            </>
        );
    }
}

export default RecipesList;