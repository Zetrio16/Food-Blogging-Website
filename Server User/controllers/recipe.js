const Recipe = require('../models/recipe')

exports.createRecipe = async(req, res)=>{
    try {

        const {title, description, ingredients, imageUrl, cookTime, instructions} = req.body;





        const newRecipe = await Recipe.create({
            title:title,
            description:description,
            ingredients:ingredients,
            cookTime:cookTime,
            imageUrl:imageUrl,
            cookTime:cookTime,
            instructions:instructions
        })
        
        res.send(newRecipe)
    } catch (error) {
        console.error('Error saving recipe:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getAllRecipes = async(req,res)=>{
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}