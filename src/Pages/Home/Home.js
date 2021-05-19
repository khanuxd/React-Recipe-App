import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

import './Home.css';

const Home = () => {
    const history = useHistory();

    const pathToRecipes = () => {
        let path = '/recipes';
        history.push(path);
    }

    const pathToNewRecipe = () => {
        let path = '/add-new-recipe';
        history.push(path);
    }

    return (
        <div className="hero">
            <h1>In a cooking Mood?</h1>
            <div>
                <Button variant="warning" onClick={pathToRecipes}>Check All Recipes</Button>
                <span>or</span>
                <Button variant="outline-warning" className="sec-btn" onClick={pathToNewRecipe}>Add New Recipes</Button>
            </div>
        </div>
    );
};

export default Home;