import React from "react";
import { Container } from "react-bootstrap";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div style={{ backgroundColor: "rgb(22, 22, 22)" }}>
            <Container>
                <div className="row py-3">
                    <div className=" col-lg-6 col-sm-12 ">
                        <div class="containere">
                            <div class="card">
                                <div class="box">
                                    <div class="content">
                                        <img style={{ width: "100%" }} src="https://i.ibb.co/k6Z38j6/kawsar.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 pt-5 mt-5 text-white text-start">
                        <h3 className="text-color">About Me</h3>
                        <p>My name is Md Kawsar Ali. I am a student. I am doing BBA Honors from National University.</p>
                        <p className=" my-4  ">
                            I really wanted to be a web developer and I'm trying and I'm a React Developer Or Frontend Developer or MERN
                            Stack Developer.To be a web developer I take a course from programming hero to web development and I prepare
                            myself as one again and I finished the course as a web developer
                        </p>
                        <p>I want to work as a web developer and I will try my best and build my career as a web developer.</p>
                        <div className="mt-4">
                            <a
                                target="_blank"
                                className="niche-btn mt-2"
                                href="https://drive.google.com/file/d/1P7xmaH1XtkMhGROTIBaFSp9aNSUXqvG7/view?usp=sharing"
                                rel="noreferrer"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutMe;
