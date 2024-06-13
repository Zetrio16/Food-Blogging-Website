const mongoose = require("mongoose")

const myFavouritesSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    myFavourites: {
        type: [String],
        default: [],
    }

})


const myFavourites = mongoose.model('myFavourite', myFavouritesSchema);

module.exports = myFavourites;