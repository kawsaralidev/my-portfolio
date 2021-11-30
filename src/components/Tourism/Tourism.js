import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tourism = () => {
    return (
        <div className=" bg-light">
             <div className="container bg-light rounded">
                <div className=" row py-3">
                    
                    <div className="d-flex col-lg-12 col-sm-12">
                        <div className="  col-lg-4  col-sm-12 mt-5">
                            <img className="w-100" src="https://i.ibb.co/4Y5wkrL/tourism1.png" alt="" />
                        </div>
                        <div className=" col-lg-4 px-3  col-sm-12 mt-5">
                            <img className="w-100" src="https://i.ibb.co/MnL2R2y/tourism2.png" alt="" />
                        </div>
                        <div className=" col-lg-4 col-sm-12 mt-5">
                            <img className="w-100" src="https://i.ibb.co/ts31MdS/tourism3.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12 my-3 text-start">
                       <h3 className="text-info">TURISUM WEBSITE</h3>
                        <ul className="my-4">
                            <li>
                            This is online booking tourism website.
                                   I used to create this site React, React Router Dom, Node.js MongoDB server.
                                  
                            </li>
                            <li>
                            You can choose your package and booking this.
                                   If you wish you can cancel your booking package.
                            </li>
                            <li>
                            If you are an admin you will see some special routes from the dashboard with which you can easily manage the website.
                            </li>
                            <li>
                            This website has been created with the people who love travel in mind so that they can travel very easily
                            </li>
                            <li>
                            The package price of this website is based on the financial status of a user so that they can easily fulfill their desires.
                            </li>
                        </ul>
                        <a href="https://turism-authentication.web.app/"
                          className="niche-btn">Visit site</a>
                        <a href="https://github.com/kawsaralidev/turisum-client"
                          className="niche-btn mx-4">Code link</a>
                        <a href="https://github.com/kawsaralidev/turisum-server"
                          className="niche-btn">Server code link</a>
                         
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Tourism;