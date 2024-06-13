import axios from "axios";
import { useState } from "react";
import { useJwt } from "react-jwt";
import { useLocation, useParams } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams();
    const location = useLocation();
    const [recipe, setRecipe] = useState(location.state.recipe);
    const token = localStorage.getItem("token")
    const {decodedToken, isExpired } = useJwt(token);
    
    function markAsFavourite()
    {
        console.log(decodedToken.userId)
        console.log(recipe._id)
        axios.post('http://localhost:3001/recipes/addMyFavourite',{
            userID:decodedToken.userId,
            recipeID:recipe._id
        })
    }
    return ( 
        <>
        <div className="card-container">
                <div className="card-a">
                    {(
                        <div className="image-container">
                            <img src={recipe.imageUrl} alt={recipe.title} className="ca-image" />
                            <div className="ca-text">
                                <h5 className="ca-title">{recipe.title}</h5>
                                <p>Cook time ~ <b>{recipe.cookTime} mins</b> </p>
                                <p className="ca-description">{recipe.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button onClick={markAsFavourite} className="markAsFavBtn">Mark as favourite</button>

            <div className="recipeDetailsIngredients">
                <h3 id='ing'>Ingredients:</h3>
                <ul className="ingredients-li">
                    {console.log(recipe)}
                    {recipe.ingredients.map((ingredient, index) => (
                        <li id='ing-li' key={index}>
                            {ingredient.name} - ({ingredient.quantity} {ingredient.unit}) 
                        </li>
                    ))}
                </ul>
            </div>

            <div className="recipeDetailsIngredients">
                <h3 id='ing'>Instructions:</h3>
                <ol className="ingredients-li">
                    {console.log(recipe)}
                    {recipe.instructions.map((instruction, index) => (
                        <li style={{listStyleType:"circle"}} id='ing-li' key={index}>
                            {instruction} 
                        </li>
                    ))}
                </ol>
            </div>
        </>
     );
}

export default RecipeDetail;