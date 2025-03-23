import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-700 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline">
        ← Back to Home
      </Link>

      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
          <ul className="list-disc pl-5 mt-2">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
          <ol className="list-decimal pl-5 mt-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index} className="text-gray-700 mt-1">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
