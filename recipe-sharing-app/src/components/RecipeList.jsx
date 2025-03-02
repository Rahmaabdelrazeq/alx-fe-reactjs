import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) =>
          recipe ? ( // Check to avoid rendering errors
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ) : null
        )
      )}
    </div>
  );
};

export default RecipeList;
