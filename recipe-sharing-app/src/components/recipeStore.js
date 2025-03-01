import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useRecipeStore = create((set) => ({
    recipes: [],

    // Add a new recipe
    addRecipe: (recipe) => set((state) => ({
        recipes: [...state.recipes, { id: uuidv4(), ...recipe }]
    })),

    // Update an existing recipe
    updateRecipe: (id, updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
        )
    })),

    // Delete a recipe
    deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),

    // Set the entire recipes array (new addition)
    setRecipes: (newRecipes) => set(() => ({
        recipes: newRecipes
    }))
}));