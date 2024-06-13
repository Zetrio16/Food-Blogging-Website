import { useEffect, useState } from "react";
import "./index.css"
import { useJwt } from "react-jwt";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";


function MyFavourite() {

    const [favRecipes, setFavRecipes] = useState([]);
    const token = localStorage.getItem("token")
    const {decodedToken, isExpired } = useJwt(token);

    function showNoFavouriteFound()
    {
        return(
            <div className="noFavouriteFound">
                <div className="no-fav text-center">No Favourites Found 😥</div>
            </div>
        )
    }

    function getAllFavRecipes()
    {
        axios.post('http://localhost:3001/recipes/getAllFavRecipes',{
            userID:decodedToken.userId
        })
        .then((res, req)=>{
            console.log(res)
            setFavRecipes(res.data)
        })
    }

    useEffect(()=>{
        if(decodedToken)
        {
            getAllFavRecipes()
        }
        
    },[decodedToken])

    function removeFavRecipe(recipeID)
    {
        axios.post('http://localhost:3001/recipes/removeFavRecipe',{
            userID:decodedToken.userId,
            recipeID:recipeID
        })
        .then((res, req)=>{
            console.log(res)
            alert('Favourite recipe is removed!')
            getAllFavRecipes()
        })
    }

    return ( 
        <>

        <div className="showAllRecipes">
            {favRecipes.map((recipe, index) => (
                                    
                <div key={index} className="col-lg-3 recipeCard">
                                        
                    <div>
                        <button onClick={()=>removeFavRecipe(recipe._id)} className="deleteFavRecipe"><MdDelete size={25} /></button>
                        <div className='card'>
                            
                            <img src={recipe.imageUrl} alt={recipe.title} />
                            <div className='card-body'>
                            <p className='card-text'>{recipe.description}</p>
                            </div>
                        </div>
                    </div>
                    <NavLink to={`/recipes/${recipe._id}`} state={{recipe : recipe}}>
                        <h5 className='c-title'>{recipe.title}</h5>
                    </NavLink>
                </div>        
         ))}

         </div>
        </>
     );
}

export default MyFavourite;