import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import RecipeDetails from './RecipeDetails';

const App = () => {
  const [showAddForm, setShowAddForm] = React.useState(false);
  
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="text-3xl font-bold text-blue-600">Recipe Sharing App</Link>
            <Routes>
              <Route 
                path="/" 
                element={
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setShowAddForm(!showAddForm)}
                  >
                    {showAddForm ? 'Cancel' : 'Add New Recipe'}
                  </button>
                } 
              />
              <Route 
                path="/recipe/:recipeId" 
                element={
                  <Link
                    to="/"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Back to Recipes
                  </Link>
                } 
              />
            </Routes>
          </div>
        </header>
        
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  {showAddForm && <AddRecipeForm onSuccess={() => setShowAddForm(false)} />}
                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">All Recipes</h2>
                    <RecipeList />
                  </div>
                </>
              } 
            />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;