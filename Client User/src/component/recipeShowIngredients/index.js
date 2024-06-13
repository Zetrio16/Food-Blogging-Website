import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './showIngredient.css';

const RecipeIngredient = () => {
    const location = useLocation();
    const [recipes, setRecipes] = useState(location.state.recipe);
    const { state } = useLocation();

    if (!state) return null;

    const { id, name, image, description } = state;

    const recipe = {
        id,
        name,
        image,
        description,
        ingredients: [
            { name: "Sesame oil", amount: "3 tablespoons", divided: true },
            { name: "Shiitake mushrooms", amount: "14 ounces", sliced: true },
            { name: "Garlic", amount: "1 clove", grated: true },
            { name: "Frozen wontons", amount: "1 12-ounce bag" },
            { name: "Chicken broth", amount: "1-2 cups" },
            { name: "Teriyaki sauce", amount: "1/2 cup" },
            { name: "Chili crisp", amount: "1-2 tablespoons" },
        ],
        toppings: [
            { name: "Green onions", sliced: true },
            { name: "Sesame seeds" },
        ],
        nutrients: {
            totalFat: { amount: 21.9, percentage: 28 },
            cholesterol: { amount: 29.6, percentage: 10 },
            sodium: { amount: 1489, percentage: 65 },
            totalCarbohydrate: { amount: 34.5, percentage: 13 },
            dietaryFiber: { amount: 4.5, percentage: 16 },
            sugars: { amount: 12.1 },
            protein: { amount: 21.5, percentage: 43 },
            vitaminA: { amount: 41.7, percentage: 5 },
            vitaminC: { amount: 17, percentage: 19 },
            iron: { amount: 3.2, percentage: 18 },
            potassium: { amount: 997.6, percentage: 21 },
            phosphorus: { amount: 401.4, percentage: 32 },
        },
    };

    return (
        <div className="recipe-c">
            <h2 className="recipe-t">{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} className="recipe-img" />
            <p className="recipe-desc">{recipe.description}</p>
            <h3 id='ing'>Ingredients:</h3>
            <ul className="ingredients-li">
                {recipe.ingredients.map((ingredient, index) => (
                    <li id='ing-li' key={index}>
                        {ingredient.name} ({ingredient.amount}) {ingredient.divided && "divided"} {ingredient.sliced && "sliced"} {ingredient.grated && "grated"}
                    </li>
                ))}
            </ul>
            <h3 id='ing'>Toppings:</h3>
            <ul className="toppings-li">
                {recipe.toppings.map((topping, index) => (
                    <li key={index}>
                        {topping.name} {topping.sliced && "sliced"}
                    </li>
                ))}
            </ul>
            <h3 id='ing'>Nutrients:</h3>
            <ul className="nutrients-li">
                {Object.keys(recipe.nutrients).map((nutrient, index) => (
                    <li key={index}>
                        {nutrient}: {recipe.nutrients[nutrient].amount} ({recipe.nutrients[nutrient].percentage}% DV)
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeIngredient;
