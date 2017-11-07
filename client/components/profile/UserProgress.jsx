
import React from 'react'
import * as d3 from 'd3'
import { connect } from 'react-redux'

import CountProgress from './CountProgress'

class UserProgress extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      progressBar: {
        tau: null,
        radius: null,
        padding: null,
        amount: null,
        total: null
      }
    }
  }
  componentDidMount () {
    console.log('here it is donny: ', this.props.profile)
    setTimeout(this.joeFunc.bind(this), 2000)
  }
  joeFunc () {
    console.log('here it is donny2: ', this.props.profile)
    const userRecipeScore = this.props.profile.recipes
    this.setState({
      tau: 2 * Math.PI,
      radius: 150,
      padding: -1,
      amount: 50, // Adjust me
      total: 100 // Adjust me
    })
  }
  render () {
    const {profile} = this.props
    const {progressBar} = this.state
    const userRecipeScore = profile.recipes
    // const progressBar = {
    //   tau: 2 * Math.PI,
    //   radius: 150,
    //   padding: -1,
    //   amount: 50, // Adjust me
    //   total: 100 // Adjust me
    // }

    progressBar.boxSize = (progressBar.radius + progressBar.padding) * 2
    progressBar.ratio = progressBar.amount / progressBar.total
    // console.log('here it is donny: ', profile)
    // console.log('here the user; ', userRecipeScore)
    return (
      <section>
        <CountProgress {...progressBar} />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(UserProgress)
