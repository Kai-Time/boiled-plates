import React from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'

import CountProgress from './CountProgress'

class UserProgress extends React.Component {
  render () {
    const progressBar = {
      tau: 3 * Math.PI,
      radius: 150,
      padding: -1,
      amount: 65, // Adjust me
      total: 100 // Adjust me
    }

    progressBar.boxSize = (progressBar.radius + progressBar.padding) * 2
    progressBar.ratio = progressBar.amount / progressBar.total
    const recipeScore = this.props.recipes.length * 3
    console.log('here it is; ', this.props.recipes)
    console.log('here it is; ', recipeScore)
    return (
      <section>
        <CountProgress {...progressBar} />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(UserProgress)
