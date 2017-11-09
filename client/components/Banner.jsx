import React from 'react'
import Link from 'react-router-dom'
// import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='quotes'>
          <h3>Why? </h3>Kai Time was created to help inspire people to try vegetarian cooking, share recipes they like, and keep track of their progress. It works through logging in, creating a profile, and searching through our extensive database for recipes you'd like to try.
      </div>
      <div className='quotes'>
        <h3>How? </h3> You can comment, add and share recipes and even host your own event. Each time you add or share a recipe or host an event you earn points which go towards earning echo warrior badges which are displayed on your profile. 
      </div>    
      <div className='quotes'>
          <h3>What?</h3> We'd like to create an online community where people can draw inspiration for cooking and sharing food. Vegetarian food is great for your health and for our environment! Check out this article on the ten best vegetarian benefits. 
          <a href='https://ohmyveggies.com/10-best-vegetarian-benefits/'> Here </a>
      </div>
    </div>
  )}

export default Banner
