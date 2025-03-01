import useRecipeStore from '../recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Add some recipes to your favorites!</p>
      ) : (
        favorites.map((recipe) => (
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

export default FavoritesList;