import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div style={{ backgroundColor: "rgb(22, 22, 22)" }}>
            <div className="container ">
                <div className="row py-3">
                    <div className=" col-lg-6 col-sm-12 ">
                        <img style={{ width: "85%" }} src="https://i.ibb.co/k6Z38j6/kawsar.png" alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 pt-5 mt-5 text-white text-start">
                        <h3 style={{ color: "#ff5e5e" }}>About Me</h3>
                        <p>My name is Md Kawsar Ali. I am a student. I am doing BBA Honors from National University.</p>
                        <p className=" my-4  ">
                            I really wanted to be a web developer and I'm trying and I'm a React Developer Or Frontend Developer or MERN
                            Stack Developer.To be a web developer I take a course from programming hero to web development and I prepare
                            myself as one again and I finished the course as a web developer
                        </p>
                        <p>I want to work as a web developer and I will try my best and build my career as a web developer.</p>

                        <Button className="niche-btn " as={Link} to="/home">
                            Download Resume
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
