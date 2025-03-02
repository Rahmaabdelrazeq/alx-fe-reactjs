import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);
    return () => clearTimeout(timeout);
  }, [inputValue, setSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
