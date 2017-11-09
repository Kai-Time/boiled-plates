import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

const Challenge = () => {
  return (
    <div className='link-challenge'>
      <h2>Be in the force!</h2>
      <Link to='/register'><div className='challenge-description'>
        <p>Join the challenge <b>&#9658;</b></p>
      </div></Link>
    </div>

  )
}

export default Challenge
