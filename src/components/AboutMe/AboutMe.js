import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="bg-light">
        <div className="container rounded">
           <div className="row py-3">
               
               <div className=" col-lg-6 col-sm-12 ">
                   <img className="w-75" src="https://i.ibb.co/sQwP3cg/about.png" alt="" />
               </div>
               <div className="col-lg-6 col-sm-12 my-3 text-start">
                  <h3 className="text-info">About Me</h3>
                   <p className=" my-4  text-gray">My name is Md Kawsar Ali. I am a student.
                    I am doing BBA Honors from National University.
                      </p>
                      <p>I really wanted to be a web developer and I'm trying and I'm a MERN stack web developer
                           Or Junior Web Developer or React Developer.To be a web developer I take a course from programming hero to
                             web development and I prepare myself as one again and I finished the course as a web developer</p>
                             <p>I want to work as a web developer and I will try my best and build my career as a web developer.</p>
                  
                     <Button  className="niche-btne " as={Link} to="/home">Back to Home</Button>
               </div>
           </div>
       </div>
    </div>
    );
};

export default AboutMe;