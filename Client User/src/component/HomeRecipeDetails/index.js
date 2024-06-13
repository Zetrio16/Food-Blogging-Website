import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './recipeQnE.css';

const RecipeComponent = () => {

    const [recipes1, setRecipes1] = useState([
        {
            id:1,
            imageUrl: 'https://pinchofyum.com/wp-content/uploads/Chicken-Wontons-in-Spicy-Chili-Sauce-Square-800x800.png',
            description: "Find simple recipes that are quick to prepare and delicious to eat.",
            title: 'Spaghetti with Crispy Zucchini',
            cookTime:20,
            ingredients:[{
                name:"Potato",
                quantity:1,
                unit:"kg"

            },
            {
                name:"Salt",
                quantity:10,
                unit:"kg"
            }],
            instructions:[]

        },
        {
            id:2,
            imageUrl: 'https://pinchofyum.com/wp-content/uploads/Chicken-Wontons-in-Spicy-Chili-Sauce-Square-800x800.png',
            description: "Find simple recipes that are quick to prepare and delicious to eat.",
            title: 'Spaghetti with Crispy Zucchini',
            cookTime:20,
            ingredients:[{
                name:"Potato",
                quantity:1,
                unit:"kg"

            },
            {
                name:"Salt",
                quantity:10,
                unit:"kg"
            }],
            instructions:[]

        },
        {
            id:3,
            imageUrl: 'https://pinchofyum.com/wp-content/uploads/Air-Fryer-Salmon-2-800x800.jpg',
            description: "Find simple recipes that are quick to prepare and delicious to eat.",
            title: 'Spaghetti with Crispy Zucchini',
            cookTime:20,
            ingredients:[{
                name:"Potato",
                quantity:1,
                unit:"kg"

            },
            {
                name:"Salt",
                quantity:10,
                unit:"kg"
            }],
            instructions:[]

        },
        {
            id:4,
            imageUrl: 'https://pinchofyum.com/wp-content/uploads/Roasted-Broccoli-Salad-3-800x800.jpg',
            description: "Gochujang Chicken Burgers with Kimchi Bacon Jam! Wow wow wow! These Gochujang Chicken Burgers are next-level good. And a perfectly sweet-spicy kimchi bacon jam piled high on top? Yes, please! #gochujangchicken #chickenburgers #kimbab",
            title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam',
            cookTime:20,
            ingredients:[{
                name:"Potato",
                quantity:1,
                unit:"kg"

            },
            {
                name:"Salt",
                quantity:10,
                unit:"kg"
            }],
            instructions:[]

        },
        {
            id: 6,
            imageUrl: "https://pinchofyum.com/wp-content/uploads/Gochujang-Chicken-Burgers-Square-800x800.png",
            description: "Gochujang Chicken Burgers with Kimchi Bacon Jam! Wow wow wow! These Gochujang Chicken Burgers are next-level good. And a perfectly sweet-spicy kimchi bacon jam piled high on top? Yes, please! #gochujangchicken #chickenburgers #kimbab",
            title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam',
            cookTime:20,
            ingredients:[{
                name:"Potato",
                quantity:1,
                unit:"kg"

            },
            {
                name:"Salt",
                quantity:10,
                unit:"kg"
            }],
            instructions:[]
        },
        {
            id: 7,
            imageUrl: "https://pinchofyum.com/wp-content/uploads/Crispy-Zucchini-Spaghetti-4-800x800.jpg",
            description: "Gochujang Chicken Burgers with Kimchi Bacon Jam! Wow wow wow! These Gochujang Chicken Burgers are next-level good. And a perfectly sweet-spicy kimchi bacon jam piled high on top? Yes, please! #gochujangchicken #chickenburgers #kimbab",
            title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam',
            cookTime:20,
            ingredients:[{
                name:"Potato",
                quantity:1,
                unit:"kg"

            },
            {
                name:"Salt",
                quantity:10,
                unit:"kg"
            }],
            instructions:[]
        },
        {
            id: 8,
            imageUrl: "https://pinchofyum.com/wp-content/uploads/Two-Giant-Cookies-2-800x800.jpg",
            description: "Gochujang Chicken Burgers with Kimchi Bacon Jam! Wow wow wow! These Gochujang Chicken Burgers are next-level good. And a perfectly sweet-spicy kimchi bacon jam piled high on top? Yes, please! #gochujangchicken #chickenburgers #kimbab",
            title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam',
            cookTime:20,
            ingredients:[{
                name:"Potato",
                quantity:1,
                unit:"kg"

            },
            {
                name:"Salt",
                quantity:10,
                unit:"kg"
            }],
            instructions:[]
        },
        {
            id: 9,
            imageUrl: "https://pinchofyum.com/wp-content/uploads/Harissa-Meatballs-with-Whipped-Feta-3-800x800.jpg",
            description: "Gochujang Chicken Burgers with Kimchi Bacon Jam! Wow wow wow! These Gochujang Chicken Burgers are next-level good. And a perfectly sweet-spicy kimchi bacon jam piled high on top? Yes, please! #gochujangchicken #chickenburgers #kimbab",
            title: 'Gochujang Chicken Burgers with Kimchi Bacon Jam', 
            cookTime:20,
            ingredients:[{
                name:"Potato",
                quantity:1,
                unit:"kg"

            },
            {
                name:"Salt",
                quantity:10,
                unit:"kg"
            }],
            instructions:[]   
        }
    ]);


    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlider = (direction, sliderContainer) => {
        const scrollAmount = direction === 'next' ? 300 : -300; // Fixed scroll amount
        const delay = 50;
        setTimeout(() => {
            sliderContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, delay);
    };


    return (
        <>
            <h1 id='h1-heading'>TOP RATED QUICK AND EASY RECIPES</h1>
            <div className="slider">
                <div className="slider-container">
                    {recipes1.map(recipe => (
                        <div key={recipe.id} className="slide">
                            <Link className='custom-link'
                                to={`/recipeDetails/${recipe.id}`}
                                state={{recipe:recipe}} >
                                <div className="recipe-card">
                                    <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
                                    <h4 id='h4-heading'>{recipe.title}</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="slider-nav" style={{marginTop:"5vh"}}>
                    <button className="prev" onClick={() => handleSlider('prev', document.querySelector('.slider-container'))}>‹</button>
                    <button className="next" onClick={() => handleSlider('next', document.querySelector('.slider-container'))}>›</button>
                </div>
            </div>
        </>
    );


};

export default RecipeComponent;
