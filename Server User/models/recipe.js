const mongoose = require("mongoose")

const recipeScehma = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ingredients: [{
        name: String,
        quantity: Number,
        unit:String
    }],
    instructions: [],
    imageUrl: String,
    cookTime: {
        type: String,
        required: true
      },
})


const Recipe = mongoose.model('Recipe', recipeScehma)

module.exports = Recipe;