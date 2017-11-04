import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Comment from 'react-uikit-comment'

class CommentBox extends React.Component {

  render() {
    return (
      <div className='commentBox'>
        Comments!
      </div>
    )
  }
}

export default connect()(CommentBox)