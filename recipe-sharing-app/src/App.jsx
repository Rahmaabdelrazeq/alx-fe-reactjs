import React from 'react'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import FavoritesList from './components/FavoritesList'
import EditRecipeForm from './components/EditRecipeForm'


const App = () => {
  return (
    <>

      <RecipeDetails />
      <AddRecipeForm />
      <DeleteRecipeButton />
      <FavoritesList />
      <EditRecipeForm />

    </>
  )
}

export default App
