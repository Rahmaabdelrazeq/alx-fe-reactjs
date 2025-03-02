import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes(state));

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => <div key={recipe.id}>{recipe.title}</div>)
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};
