import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = ({ onSuccess }) => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newRecipe = {
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients.split('\n').filter(item => item.trim() !== ''),
      instructions: formData.instructions.split('\n').filter(item => item.trim() !== '')
    };
    
    addRecipe(newRecipe);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      instructions: ''
    });
    
    if (onSuccess) onSuccess();
  };



  (newRecipes) => set(() => ({
    recipes: newRecipes
}))
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded h-24"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Ingredients (one per line)</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded h-32"
            placeholder="1 cup flour&#10;2 eggs&#10;1/2 cup sugar"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Instructions (one step per line)</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded h-48"
            placeholder="Preheat oven to 350°F&#10;Mix dry ingredients&#10;Add wet ingredients and stir"
            required
          />
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;