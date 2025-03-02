import React, { useEffect } from 'react';
import useRecipeStore from './stores/recipeStore';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  const { setRecipes, addFavorite, removeFavorite, favorites, recipes } = useRecipeStore();

  useEffect(() => {
    // Mock API call to fetch recipes
    const fetchedRecipes = [
      { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish' },
      { id: 2, title: 'Avocado Toast', description: 'Healthy and delicious breakfast option' },
      { id: 3, title: 'Chicken Curry', description: 'Spicy and creamy Indian curry' },
    ];
    setRecipes(fetchedRecipes);
  }, [setRecipes]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          )}
        </div>
      ))}

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
