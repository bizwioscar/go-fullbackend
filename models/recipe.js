// import mongoose
const mongoose = require('mongoose');

// the schema used to create the documents to save into mongodb
const recipeSchema = mongoose.Schema({
    title: {type: String, required: true },
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true},
    time: {type: Number, required: true},
    difficulty: {type: Number, required: true}
});

//exportation to access our model from outside this js file
module.exports = mongoose.model('Recipe', recipeSchema);