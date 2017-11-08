import React from "react";
import { Link } from "react-router-dom";
import Header from './Header'
import AboutUsPeople from './AboutUsPeople'

const AboutUs = props => {
    return <div>
        <Header />
        <br />
        <Link to="/">
            <button className="button is-large is-danger">Back to Home</button>
        </Link>
        <br />
        <div className="something">
            <p className="subtitle">
                We are three totally stoked devs coming together to create a place where people can feel insipred to share there favourite recipes, track their progress and get ideas for their next vegetarian meal.
        </p>
            <br />
            <h2 className="title subtitle is-2"><strong>Meet the Team</strong></h2>
        </div>

        <div>
            <AboutUsPeople name="Skye" email="skye@skye.com" githubUserName="Skyebelinda" imageSrc="Skye.jpg" />
            <AboutUsPeople name="Raj" email="Raj@raj.com" githubUserName="rajal-kumar" imageSrc="Raj.jpg" />
            <AboutUsPeople name="Daz" email="daz@daz.com" githubUserName="dazyang" imageSrc="daz.jpg" />
        </div>
    </div>;
}
export default AboutUs