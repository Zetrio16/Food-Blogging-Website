const myFavourite = require("../models/myFav")
const Recipe = require('../models/recipe')

exports.addMyFavourite = async(req, res)=>
{
try {
    const {userID, recipeID} = req.body;

    let userFavRecipes = await myFavourite.findOne({userID})

    if(!userFavRecipes)
    {
        userFavRecipes = new myFavourite({userID, myFavourites:[]})
    }

    if(userFavRecipes.myFavourites.includes(recipeID)){
        res.status(200).json({ success: true, message: 'Recipe already marked as favourite' });
    }else{
        userFavRecipes.myFavourites.push(recipeID)
        await userFavRecipes.save()
        res.status(200).json({ success: true, message: 'Recipe marked as favourite successfully.' });
    
    }
} catch (error) {
    console.log(error)
}

}

exports.getFavouriteRecipes = async (req, res) => {
    try {
        const {userID} = req.body
        const favouritesDocument = await myFavourite.findOne({ userID });

        if (!favouritesDocument) {
            return res.status(404).json({ message: "Favourites not found" });
        }

        const favouriteRecipeIDs = favouritesDocument.myFavourites;
        const favouriteRecipes = await Recipe.find({ _id: { $in: favouriteRecipeIDs } });

        res.json(favouriteRecipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.removeFavRecipe = async (req, res) => {
    try {
        const { userID, recipeID } = req.body;

        const favouritesDocument = await myFavourite.findOne({ userID });

        if (!favouritesDocument) {
            return res.status(404).json({ message: "Favourites not found" });
        }
        favouritesDocument.myFavourites = favouritesDocument.myFavourites.filter(id => id !== recipeID);
        await favouritesDocument.save();
        res.json({ message: "Recipe removed from favourites successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};