import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export const useRecipeStore = create((set) => ({
    recipes: [],


    addRecipe: (recipe) => set((state) => ({
        recipes: [...state.recipes, { id: uuidv4(), ...recipe }]
    })),


    updateRecipe: (id, updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
        )
    })),

    deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id)
    }))
}));