import React from 'react'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import FavoritesList from './components/FavoritesList'
import EditRecipeForm from './components/EditRecipeForm'
import SearchBar from './components/SearchBar'
import RecommendationsList from './components/RecommendationsList'


const App = () => {
  return (
    <>

      <RecipeDetails />
      <AddRecipeForm />
      <DeleteRecipeButton />
      <FavoritesList />
      <EditRecipeForm />
     <SearchBar/>
     <RecommendationsList/>
    

    

    </>
  )
}

export default App
