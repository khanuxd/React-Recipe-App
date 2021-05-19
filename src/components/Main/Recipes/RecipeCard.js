import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './RecipeCard.css'

const RecipeCard = ({ image, name, origin, cookTime, desc, url }) => {
    const descLimit = (str, no_of_words) => {
        return `${str.split(" ").splice(0, no_of_words).join(" ")}...`;
    };

    return (
        <Card>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="card-tag">
                    <Card.Text className="recipe-origin">{origin}</Card.Text>
                    <Card.Text>{cookTime} Min</Card.Text>
                </div>
                <Card.Text>{descLimit(desc, 15)}</Card.Text>
                <LinkContainer to={`/recipes/${url}`}>
                    <Button variant="outline-warning" className="card-button">View Full Recipe</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;