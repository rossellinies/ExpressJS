const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const RecipeSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    image: String,
  });
  
  const Recipe = mongoose.model("Recipe", RecipeSchema);