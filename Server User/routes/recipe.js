const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe');
const myFavouriteController = require('../controllers/myFavourites')

router.post('/createRecipe', recipeController.createRecipe)
router.get('/', recipeController.getAllRecipes)
router.post('/addMyFavourite', myFavouriteController.addMyFavourite)
router.post('/getAllFavRecipes', myFavouriteController.getFavouriteRecipes)
router.post('/removeFavRecipe', myFavouriteController.removeFavRecipe)


module.exports = router