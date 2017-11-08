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
        <div className='banner'>
          <img src={recipe.image} alt=''></img>
        </div>
        <h2>{recipe.name}</h2>
        <div className='sidebar'>
          {recipe.ingredients}
        </div>
        <div className='sidebar-2'>
          {recipe.instructions}
        </div>
        <div className='commment-section'>
          <AddComment recipeId={recipe.id}/>
        </div>
        <div className='comment-container'>
          <CommmentContainer recipeId={recipe.id} />
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
