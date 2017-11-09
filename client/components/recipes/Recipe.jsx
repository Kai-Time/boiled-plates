import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import SkyLight from 'react-skylight'

import { getRecipe } from '../../actions/recipes'
// import SingleRecipe from './SingleRecipe.jsx'

const Recipe = (props) => {
  // console.log(props)
  return (
    <div className='recipe-tickets'>
      <div className='user-recipe-title'>{props.recipe.name}</div>
      <img src={props.recipe.image} alt='recipe-image' className='recipe-img'/>
      <Link to={`/recipes/${props.recipe.id || props.recipe.recipeId}`}>
        <div className='check-it-out'>Checkout {props.recipe.name}'s recipe</div>
      </Link>

    </div>
  )
}

export default connect()(Recipe)


      // < img src= { props.recipe.image } className= 'recipe-img' alt= 'recipe-image' />
      
      //   <Link to={`/recipes/${props.recipe.id}`}><div className='check-it-out'>Checkout "username's" recipe</div></Link>