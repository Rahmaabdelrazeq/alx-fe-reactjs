import useRecipeStore from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Start favoriting recipes to get recommendations!</p>
      ) : (
        recommendations.map((recipe) => (
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

export default RecommendationsList;