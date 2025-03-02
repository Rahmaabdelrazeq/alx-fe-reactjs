import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useRecipeStore from './stores/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

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
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
