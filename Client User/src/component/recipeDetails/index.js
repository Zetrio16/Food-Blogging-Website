import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import './recipeDetail.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import RecipeComponent from '../HomeRecipeDetails/index';

const CardWithDetails = () => {
    const location = useLocation();
    const { state } = location;
    let imageUrl, cardTitle, cardText;

    if (state !== null && state !== undefined) {
        imageUrl = state.imageUrl;
        cardTitle = state.cardTitle;
        cardText = state.cardText
    }

    return (
        <>
            <div className="card-container">
                <div className="card-a">
                    {imageUrl && (
                        <div className="image-container">
                            <img src={imageUrl} alt={cardTitle} className="ca-image" />
                            <div className="ca-text">
                                <h5 className="ca-title">{cardTitle}</h5>
                                <p className="ca-description">{cardText}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            <RecipeComponent name={state} />

        </>
    );
};

export default CardWithDetails;