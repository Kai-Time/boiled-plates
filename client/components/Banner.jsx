import React from 'react'
// import { Link } from 'react-router-dom'
import Slider from 'react-image-slider'

class Banner extends React.Component {

  render() {
    // const images = [
    //   '/images/EmptyName.jpg',
    //   'images/challenge.jpg',
    //   'images/challenge.jpg',
    //   'images/challenge.jpg',
    //   'images/challenge.jpg',
    //   'images/challenge.jpg',
    //   'images/challenge.jpg',
    // ]

    //   <Slider images= { images } isInfinite delay= { 5000}>
    //   { images.map((image, key) => <div key={key}><img src={image} /></div>) }
    // </Slider>
    
    return (
      <div className='banner'>
        <div className='quotes'>
            Why?
        </div>
        <div className='quotes'>
            How?
        </div>
        <div className='quotes'>
            What?
        </div>
      </div>
      
  )
}}

export default Banner
