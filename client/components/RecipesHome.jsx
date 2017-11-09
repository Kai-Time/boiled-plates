import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {getRecipes} from '../actions/recipes'
import RecipeList from './recipes/RecipeList'

const Recipes = ({recipes, dispatch}) => {
  return (
    <div className='link-recipe'>
      <h2>Find recipes</h2>
      <Link to="/recipes"><div className='recipe-description'>
        <p id='recipe-d'>Checkout our collection of recipes! <b>&#9658;</b></p>
      </div></Link>
    </div>
  )
}

export default connect()(Recipes)
