import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try a different search term!</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;