import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onCancel, onSuccess }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients.join('\n'),
    instructions: recipe.instructions.join('\n')
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    event.preventDefault();
    
    const updatedRecipe = {
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients.split('\n').filter(item => item.trim() !== ''),
      instructions: formData.instructions.split('\n').filter(item => item.trim() !== '')
    };
    
    updateRecipe(recipe.id, updatedRecipe);
    onSuccess();
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Recipe</h2>
      
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
            required
          />
        </div>
        
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update Recipe
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;

