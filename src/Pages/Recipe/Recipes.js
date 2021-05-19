import React, { useState, useEffect } from 'react';
import RecipesList from '../../components/Main/Recipes/RecipesList';

import axios from "axios";
import { Spinner } from 'react-bootstrap';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const allRecipes = async () => {

            try {
                const recipeRes = await axios
                    .get("http://localhost:3001/recipes");
                setRecipes(recipeRes.data);
                setLoading(true);
            } catch (error) {
                console.log('error getting data:' + error);
            }
        };
        allRecipes();
    }, []);

    return (
        <>
            {loading ? <RecipesList key={recipes.id} recipes={recipes} /> : (
                <Spinner animation="border" />
            )}
        </>
    );
};

export default Recipes;