import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const SearchBar = () => {
  const { setSearchTerm } = useRecipeStore();

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
