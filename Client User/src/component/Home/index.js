import { useState } from 'react'
import Slider from '../recipeSlider/slider.js'
import { Link } from 'react-router-dom'
import './index.css'
import { useEffect } from 'react'
import { Redirect as isAuthenticate } from '../../utils/redirect.js'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const isAuth = isAuthenticate();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth)
        {
            navigate("/auth/login")
        }
    })

    const items = [
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/Teriyaki-Burgers-9-420x600.jpg', title: 'QUICK & EASY' },
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/Creamy-Red-Pepper-Pasta-1-2-183x183.jpg', title: 'DINNER' },
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-183x183.jpg', title: 'VEGETARIAN' },
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/Couscous-Skillet-61-183x183.jpg', title: 'HEALTHY' },
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-183x183.jpg', title: 'INSTANT POT' },
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-183x183.jpg', title: 'VEGAN' },
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-183x183.jpg', title: 'MEAL PREP' },
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-183x183.jpg', title: 'SOUPS' },
        { imageUrl: 'https://pinchofyum.com/wp-content/uploads/Miso-Crunch-Salad-62-183x183.jpg', title: 'SALAD' }
    ];

    const [cards, setCards] = useState([
        {
            imageUrl: 'https://pinchofyum.com/wp-content/uploads/Teriyaki-Burgers-9-420x600.jpg',
            cardText: "There's no time! But is there ever? If you're feeling like you need something super quick and super easy, then you came to the right place. Let's get you eating, stat!",
            cardTitle: 'Quick and Easy'
        },
        {
            imageUrl: 'https://pinchofyum.com/wp-content/uploads/Couscous-Skillet-61-420x600.jpg',
            cardText: "Maybe you're switching up some eating habits, maybe you're coming off a week of all cookies all the time, here's the place to search all the healthy things!",
            cardTitle: 'Healthy'
        },
        {
            imageUrl: 'https://pinchofyum.com/wp-content/uploads/5-Ingredient-Spicy-Pork-1-2-420x600.jpg',
            cardText: "Prep takes up too much brainspace? Each of these recipes is simple, and only 5 ingredients! No long grocery lists here, let’s get cooking.",
            cardTitle: '5 Ingredients'
        },
        {
            imageUrl: 'https://pinchofyum.com/wp-content/uploads/Crispy-Zucchini-Spaghetti-4-420x600.jpg',
            cardText: "Ugh, of COURSE we would eat pasta for every single meal if we could. But let's be reasonable, maybe just 8 times per week?  Oh pasta, we love you so.",
            cardTitle: 'Pasta'
        }
    ]);

    return (
        <>
            <div className='bg-img'>
                <div className='bg-text'>
                    <h3 id='style-h3'>SIMPLE RECIPES MADE FOR real, actual, everyday life</h3>
                </div>
                <div className='container'>
                    <div className='row'>
                        {cards.map((card, index) => (
                            <div className='col-lg-3 col-md-6 col-sm-12' key={index}>
                                <Link to="/recipeDetails" state={card} className="custom-link">
                                    <div className='card'>
                                        <img className='card-img' src={card.imageUrl} alt={card.cardTitle} />
                                        <div className='card-body'>
                                            <p className='card-text'>{card.cardText}</p>
                                        </div>
                                    </div>
                                    <h5 className='c-title'>{card.cardTitle}</h5>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <Slider items={items} />
        </>
    )
}

export default Home;