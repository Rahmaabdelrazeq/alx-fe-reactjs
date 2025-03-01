import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId, onSuccess }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();
  
  const handleDelete = () => {
    deleteRecipe(recipeId);
    setShowConfirm(false);
    if (onSuccess) onSuccess();
  };
  
  
  return (
    <div>
      {showConfirm ? (
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDelete}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={() => setShowConfirm(false)}
          >
            Cancel
          </button>
          
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setShowConfirm(true)}
        >
          Delete Recipe
        </button>
      )}
    </div>
  );
};

export default DeleteRecipeButton;