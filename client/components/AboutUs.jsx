import React from "react";
import { Link } from "react-router-dom";
import AboutUsPeople from './AboutUsPeople'

const AboutUs = props => {
    return <div>
        <div className="flex-container">
            <h2>The Team</h2>
        </div>
            <img src='/images/EmptyNAme.jpg' width='80%'/>
            <p className="subtitle">
                We are three totally stoked devs coming together to create a place where people can feel insipred to share there favourite recipes, track their progress and get ideas for their next vegetarian meal.
        </p>
    </div>
}
export default AboutUs