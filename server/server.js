const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const axios = require('axios');
const apiKey = "f6bac5e24a51416e8ba0eb6b6b70111c";
app.use(express.static('../client'));
const parser = require('body-parser');
app.use(parser.json());



app.post('/getrecipedata', async (req, res) => {
    let recipedata = req.body;
    console.log(recipedata.ingredient);
    let recipe = await generateRecipe(recipedata.ingredient);
    console.log(recipe);
    res.status(200).json(recipe);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})




const generateRecipe = async (ingredient) => {
    try {
      // Make a GET request to the Spoonacular API to search for recipes by ingredient
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}&number=1`);
  
      // Choose a random recipe from the results
      const randomIndex = Math.floor(Math.random() * response.data.length);
      console.log(response.data);
      const recipe = response.data[randomIndex];
  
      // Log the recipe information
      console.log(recipe);
      console.log(`Title: ${recipe.title}`);
      let title = recipe.title;
      console.log(`Image: ${recipe.image}`);
      let image = recipe.img;
  
  
      // Make another GET request to get the recipe's instructions
      const instructionsResponse = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${apiKey}`);
  
        let steps = [];

      if(instructionsResponse.data.length){

            steps = instructionsResponse.data[0].steps;
    
    } else {
          console.log("No Instructions found for this recipe")
      }
      
      
      return {title, image, steps};

    } catch (error) {
      console.error(error);
    }
    
};






