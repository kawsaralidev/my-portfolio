import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div className=" body-style">
            <div className="container">
                <div className="row">
                    <div className=" col-lg-6 col-sm-12 ">

                        <img className="w-75" src="https://i.ibb.co/5F2rmvV/portfolio.jpg" alt="" />

                    </div>
                    <div className="col-lg-6 col-sm-12  text-start">
                        
                        <h2 className="fs-1 fw-bold text-info  ">MD KAWSAR ALI<br /></h2>
                        <h5 className=" fw-bold text-info  "> MERN STACK DEVELOPER </h5>
                        <h5 className=" fw-bold text-info  "> JUNIOR WEB DEVELOPER </h5>
                        <h5 className=" fw-bold text-info  "> REACT DEVELOPER </h5>
                        <p className=" text-white my-5">You can contact me if you want to do any project or 
                           need any employee <br /> in your company.</p>
                        <a href="https://drive.google.com/file/d/1QfIrhj9Zzi02D1WtosHnuD5ApoXiBsTX/view" 
                        className=" btn-style">
                            Download Resume</a> <br />
                            <Button className="btn-style  mt-4 " as={Link} to="/contact">Contact Me</Button>
                          
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;