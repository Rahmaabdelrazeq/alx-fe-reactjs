import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;


import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;

import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  
  filteredRecipes: [],
  
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    set({ filteredRecipes: filtered });
  },

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], 
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),

  deleteRecipe: (recipeId) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
}));

export default useRecipeStore;

