import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) => 
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  
  const [isEditing, setIsEditing] = React.useState(false);
  
  if (!recipe) {
    return (
      <div className="p-4">
        <p>Recipe not found!</p>
        <button 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate('/')}
        >
          Back to Recipes
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto p-4">
      {isEditing ? (
        <EditRecipeForm 
          recipe={recipe} 
          onCancel={() => setIsEditing(false)}
          onSuccess={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>{recipe.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal pl-5">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="mb-1">{step}</li>
              ))}
            </ol>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsEditing(true)}
            >
              Edit Recipe
            </button>
            
            <DeleteRecipeButton 
              recipeId={recipe.id} 
              onSuccess={() => navigate('/')}
            />
            
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              onClick={() => navigate('/')}
            >
              Back to Recipes
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;