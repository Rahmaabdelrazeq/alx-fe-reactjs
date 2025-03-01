import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  useEffect(() => {
    filterRecipes(); 
  }, [searchTerm, filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px' }}
    />
  );
};

export default SearchBar;