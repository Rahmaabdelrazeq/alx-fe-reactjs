import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addFavorite: (recipeId) => {
    if (!get().favorites.includes(recipeId)) {
      set((state) => ({ favorites: [...state.favorites, recipeId] }));
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    }));
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        favorites.includes(recipe.id) && Math.random() > 0.3 
    );
    set({ recommendations: recommended });
  },

  setRecipes: (recipeList) => set({ recipes: recipeList }),
}));

export default useRecipeStore;
