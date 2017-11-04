import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CommentBox from '../comment/CommentBox'

function SingleRecipe(props) {
  const recipe = props.recipe

  return (
    <div className='recipe-container'>
      <div className='recipe-info'>
        <img src={recipe.image} alt=''></img>
        <hr />
        <p>{recipe.name}</p>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
      </div>
      <div className='comments'>
        <CommentBox />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id)
  return { 
    recipe: state.recipes.find(recipe => id === recipe.id) 
  }
}

export default connect(mapStateToProps)(SingleRecipe)