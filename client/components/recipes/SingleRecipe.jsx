import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {getRecipeComments} from '../../actions/addComment'
import {getRecipes} from '../../actions/recipes'
import AddComment from '../comments/AddComment'
import CommmentContainer from '../comments/CommentContainer'

class SingleRecipe extends React.Component {
  componentDidMount () {
    this.props.dispatch(getRecipes())
    this.props.dispatch(getRecipeComments(this.props.recipe.id))
  }

  // console.log(this.state.props)
  render () {
    const { recipe } = this.props
    return (
      <div>
        <h2>{recipe.name}</h2>
        <div className='empty-banner'>
          {/* <div className='recipe-holder'> */}
          <img src={recipe.image} className='single-recipe-img' alt='food-img'></img>
          <div className='flex-container3'>
            <div className='ingredients'>
              <div className='title-box'>Ingredients:</div>
              {recipe.ingredients}
            </div>
            <div className='instructions'>
              <div className='title-box'>Instructions:</div> 
              {recipe.instructions}
            </div>
          </div>
          {/* </div> */}
          {/* <div className='commment-section'> */}
        </div>
        <div className='flex-container-center'>
          <AddComment recipeId={recipe.id}/>
          {/* <div className='comment-container'> */}
          <div className='comment-area'>
            <CommmentContainer recipeId={recipe.id} />
          </div>
          {/* </div> */}
        </div>
      </div>

    )
  }
}

SingleRecipe.defaultProps = {
  recipe: {
    image: '',
    name: '',
    instructions: '',
    id: 1,
    ingredients: ''
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id)
  return {
    recipe: state.recipes.find(recipe => id === recipe.id),
    comments: state.comments
  }
}

export default connect(mapStateToProps)(SingleRecipe)
