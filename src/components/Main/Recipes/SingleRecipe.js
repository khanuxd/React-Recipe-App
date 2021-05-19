import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { Button } from 'react-bootstrap';

import './SingleRecipe.css';

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState();
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if (!recipe) {
            axios
                .get("http://localhost:3001/recipes/" + id)
                .then(res => setRecipe(res.data));
        }
    });

    let recipeData = undefined;

    if (!recipe) {
        recipeData = <h1>Loading...</h1>
    }

    if (recipe) {

        recipeData = (
            <>
                <div className="recipe">
                    <img src={recipe.image} alt={recipe.name} />
                    <div className="recipe-details">
                        <h1>{recipe.name}</h1>
                        <div className="origin-time-section">
                            <p> Origin: {recipe.origin} </p>
                            <p> Preparation Time: {recipe.cookTime} Min </p>
                        </div>
                        <div className="about-section">
                            <h3>About</h3>
                            <p>{recipe.desc}</p>
                        </div>
                        <div className="ingredients-div">
                            <h3>Ingredients</h3>
                            {<ul>
                                {recipe.recipeIngredient.map((recipeIng) => {
                                    return (
                                        <li key={recipeIng.id}>
                                            {recipeIng.ingquantity}
                                            {" "}
                                            {recipeIng.ingName}
                                        </li>
                                    )
                                })}
                            </ul>}
                        </div>
                        <div className="steps-div">
                            <h3>Steps</h3>
                            <ul>
                                {recipe.recipeInstructions.map((recipeInd) => {
                                    return (
                                        <li key={recipeInd.id}>
                                            {recipeInd.recipeStep}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="recipe-footer">
                    <Button variant="warning" onClick={() => history.goBack()}>Back to All Recipe</Button>
                </div>
            </>
        )
    }

    return (
        <div>
            {recipeData}
        </div>
    );
};

export default SingleRecipe;