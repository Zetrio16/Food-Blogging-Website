import { useEffect, useState } from "react";
import IngredientForm from "./ingredientForm";
import './index.css'
import axios from "axios";

import { NavLink } from "react-router-dom";


function Recipes() {
    




    const [searchRecipe, setSearchRecipe] = useState('');
    const [recipeFormStatus, setRecipeFormStatus] = useState(false)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [instruction, setInstruction]=  useState('');
    const [cookTime, setCookTime] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [recipes, setRecipes] = useState([]);

    function getAllRecipe()
    {
        axios.get('http://localhost:3001/recipes')
        .then((res, req)=>{
            console.log(res)
            setRecipes(res.data)
        })
        .catch((Error)=>{
            alert(Error)
        })
    }
    useEffect(()=>{
        getAllRecipe()
    },[])

    const handleIngredientSubmit = (ingredient) => {
        
        if(ingredient.name && ingredient.quantity)
            {

                setIngredients([...ingredients, ingredient]);
        }else{
            alert("Please fill the required ingredients!")
        }
      };


      const handleInstructionSubmit = () => {
        if(instruction.trim()) {
            setInstructions([...instructions, instruction]);
            setInstruction(''); 
        } else {
            alert("Please fill the required instruction!");
        }
    };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(title && description)
        {
    
        const recipe = {
            title,
            description,
            ingredients,
            cookTime,
            imageUrl,
            cookTime,

            instructions


          };
          console.log('Submitted Recipe:', recipe);
          await axios.post('http://localhost:3001/recipes/createRecipe', recipe)
          .then((res, req)=>{
            console.log(res)
          })

          getAllRecipe();
          setTitle('');
          setDescription('');
          setCookTime('');
          setIngredients([]);
          setImageUrl('');
          setRecipeFormStatus(false);
        }
        else
        {
            alert("Please fill the required")
        }
      };
    function handleRecipeUpload()
    {
        setRecipeFormStatus(!recipeFormStatus)
    }

    function handleRemoveIngredient(index)
    {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
    }

    function handleRemoveInstructions(index)
    {
        const updatedInstructions = [...instructions];
        updatedInstructions.splice(index, 1);
        setInstructions(updatedInstructions);
    }

    const filteredRecipes = recipes.filter(recipe => {
        const searchText = searchRecipe.toLowerCase();
        return (
            recipe.title.toLowerCase().includes(searchText) ||
            recipe.description.toLowerCase().includes(searchText) ||
            recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(searchText))
        );
    });
    
    return ( 
        <>
            <div className="recipesContainer">
                <div className="recipeSearchBar">
                    <input type="text" value={searchRecipe} onChange={(e)=>setSearchRecipe(e.target.value)} placeholder="Search a recipe"/>
                    <button className="recipeUploadBtn" onClick={handleRecipeUpload}>{!recipeFormStatus?'Upload':'Cancel'}</button>

                </div>
                {recipeFormStatus && <div className="recipeCreateForm">
                        
                        <input type="text" placeholder="Enter recipe title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" value={description} placeholder="Enter recipe description" onChange={(e) => setDescription(e.target.value)} />
                        <br></br><br></br>
                        <input type="text" placeholder="Approx Cooking time (in mins)" value={cookTime} onChange={(e)=>setCookTime(e.target.value)}/>
                        <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
                        <br></br><br></br>
                        <h3>Ingredients:</h3>
                        {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <li onClick={() => handleRemoveIngredient(index)}>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>
                        </div>
                        ))}
                        <IngredientForm onSubmit={handleIngredientSubmit} /><br></br>
                        
                        <br></br><br></br>
                        <h3>Instructions:</h3>  
                        {instructions.map((isnt, index) => (
                        <div key={index}>
                            <li onClick={() => handleRemoveInstructions(index)}>{isnt}</li>
                        </div>
                        ))}  
                        <center>
                            <input style={{marginBottom:"0.5rem"}} type="text" placeholder="Add n instruction" value={instruction} onChange={(e)=>setInstruction(e.target.value)}/>
                            <br></br>
                            <button style={{marginBottom:"1.5rem"}} type="button" className='addIngredientBtn' onClick={handleInstructionSubmit}>Add Instruction</button>

                        </center>
                        
                        <button className='addIngredientBtn' onClick={handleSubmit} style={{width:"100%", background:"#d63031"}}>Create Recipe</button>
                
                </div>}

                <div className="showAllRecipes">
                    {filteredRecipes.map((recipe, index) => (
                        
                        <div key={index} className="col-lg-3 recipeCard">
                        
                            <div className='card'>
                                <img src={recipe.imageUrl} alt={recipe.title} />
                                <div className='card-body'>
                                    <p className='card-text'>{recipe.description}</p>
                                </div>
                            </div>
                            <NavLink to={`/recipes/${recipe._id}`} state={{recipe : recipe}}>
                            <h5 className='c-title'>{recipe.title}</h5>
                            </NavLink>
                        </div>
                        
                    ))}

                </div>
                {recipeFormStatus && <div className="recipeCreateForm">
                        
                        <input type="text" placeholder="Enter recipe title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" value={description} placeholder="Enter recipe description" onChange={(e) => setDescription(e.target.value)} />
                        <br></br><br></br>
                        <center><input type="text" placeholder="Approx Cooking time (in mins)" value={cookTime} onChange={(e)=>setCookTime(e.target.value)}/></center>
                        <br></br>
                        <h3>Ingredients:</h3>
                        {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <li onClick={() => handleRemoveIngredient(index)}>{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>
                        </div>
                        ))}
                        <IngredientForm onSubmit={handleIngredientSubmit} /><br></br>
                        <button className='addIngredientBtn' onClick={handleSubmit} style={{width:"100%", background:"#d63031"}}>Create Recipe</button>
                </div>}
            </div>
        </>
     );






    
}


export default Recipes;
