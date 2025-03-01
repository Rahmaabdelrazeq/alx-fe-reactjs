import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import FavoritesList from './components/FavoritesList';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import RecommendationsList from './components/RecommendationsList';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/RecipeDetails" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/delete-recipe" element={<DeleteRecipeButton />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/edit-recipe" element={<EditRecipeForm />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
        <Route path="/recipelist" element={<RecipeList />} />
      </Routes>
    </Router>
  );
};

export default App;