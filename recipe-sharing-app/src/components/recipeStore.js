import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: (state) =>
    state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
}));

filteredRecipes: (state) =>
    state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
      (state.selectedIngredients.length === 0 || state.selectedIngredients.every(ing => recipe.ingredients.includes(ing))) &&
      (state.maxPrepTime ? recipe.prepTime <= state.maxPrepTime : true)
    )
  