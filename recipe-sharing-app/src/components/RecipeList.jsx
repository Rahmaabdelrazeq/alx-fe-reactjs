import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? <p>No recipes found</p> : null}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
