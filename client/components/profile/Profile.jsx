import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import jump from 'jump.js'
import SkyLight from 'react-skylight'

import {getRecipes} from '../../actions/recipes'
import {getProfile} from '../../actions/profile'
import RecipeForm from '../recipes/RecipeForm'
import UserProgress from './UserProgress.jsx'
import UserRecipeContainer from '../recipes/UserRecipeContainer'

class Profile extends React.Component {
  componentDidMount () {
    this.props.dispatch(getProfile())
  }
  render () {
    const profile = this.props.profile
    const {firstname, lastname, postValue, profile_image, recipes} = profile

    const recipeForm= {
      backgroundColor: '#2e7a84',
      color: '#ffffff',
      width: '50%',
      height: '500px'
    }

    return (
      <div className='profile'>
        <div className='side-bar'>
          <UserProgress score={postValue} image={profile_image} />
          <div className='flex-box'>
            <p id='challenge'>Your Challenge Progress</p>
            <div className='badgets'><p id='username'> Would you like to share your meal today? </p></div>
            <form className=''>
              <input type='text' name='comment' className='share-post'/>
              <button>Share post</button>
            </form>
          </div>
        </div>
        <div className='post-container'>
          <div className='what-to-do'>
            <button className='options' onClick={() => this.recipeForm.show()}>Add Your Recipe</button>
            <button className='options'>Host A Kai</button>
            <button className='options'>Favourite List</button>
          </div>

          <SkyLight dialogStyles={recipeForm} hideOnOverlayClicked ref={ref => (this.recipeForm = ref)} title="Add My Recipe">
            <RecipeForm />
          </SkyLight>
              {recipes && <UserRecipeContainer recipes={recipes}/>}
        </div>
      </div>
    )
  }
}

Profile.defaultProps = {
  profile: {
    firstname: '',
    lastname: '',
    email: '',
    postTypeId: '',
    profile_image: '',
    postValue: '',
    recipes: []
  }
}

const mapStateToProps = ({auth, recipes, profile}) => {
  return {
    profile
  }
}

export default connect(mapStateToProps)(Profile)
