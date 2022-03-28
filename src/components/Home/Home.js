import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MyProjects from "../MyProjects/MyProjects";
import MySkills from "../MySkills/MySkills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
            <MySkills></MySkills>

            <Contact></Contact>
        </div>
    );
};

export default Home;
