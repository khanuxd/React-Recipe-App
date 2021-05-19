import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../../Pages/Home/Home';
import Recipes from '../../Pages/Recipe/Recipes'
import About from '../../Pages/About/About';
import RecipeForm from '../../Pages/Recipe/AddNewRecipe';
import SingleRecipe from "./Recipes/SingleRecipe";

import './Main.css';

const Main = () => {
    return (
        <main className="main-section">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/recipes">
                    <Recipes />
                </Route>
                <Route path="/recipes/:id">
                    <SingleRecipe />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/add-new-recipe">
                    <RecipeForm />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;