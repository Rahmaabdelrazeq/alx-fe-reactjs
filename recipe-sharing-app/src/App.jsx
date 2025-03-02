import React, { useEffect } from 'react';
import useRecipeStore from './stores/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
  const { setRecipes } = useRecipeStore();

  useEffect(() => {
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
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
