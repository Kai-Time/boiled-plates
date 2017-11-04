import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Comment from 'react-uikit-comment'

class Comments extends React.Component {

  render() {
    <Comment primary title='Author' meta='12 days ago | Profile | #'
      avatar={{ src: 'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder' }}>

     <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua.
    </p>
    </Comment>
  }
}

export default connect()(Comments)