import React from "react";
import { Link } from "react-router-dom";
import AboutUsPeople from './AboutUsPeople'

const AboutUs = props => {
    return <div>
        <div className="flex-container">
            <p className="subtitle">
                We are three totally stoked devs coming together to create a place where people can feel insipred to share there favourite recipes, track their progress and get ideas for their next vegetarian meal.
        </p>
            <br />
            <h2 className="title subtitle is-2"><strong>Meet the Team</strong></h2>
        </div>

        <div className="recipe-tickets">
            <AboutUsPeople name="Skye" email="skye@skye.com" githubUserName="Skyebelinda" imageSrc="../../images/profile_images/skye.jpg" />
            <AboutUsPeople name="Raj" email="Raj@raj.com" githubUserName="rajal-kumar" imageSrc="../../images/profile_images/Raj.png" />
            <AboutUsPeople name="Daz" email="daz@daz.com" githubUserName="dazyang" imageSrc="../../images/profile_images/daz.jpg" />
        </div>
    </div>;
}
export default AboutUs