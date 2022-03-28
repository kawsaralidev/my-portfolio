import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Healthcare = () => {
    return (
        <div className=" bg-light">
             <div className="container bg-light rounded">
                <div className=" row py-3">
                    
                    <div className="d-flex col-lg-12 col-sm-12">
                        <div className="  col-lg-4  col-sm-12 mt-5">
                            <img className="w-100" src="https://i.ibb.co/qYgmr62/healthcare1.png" alt="" />
                        </div>
                        <div className=" col-lg-4 px-3  col-sm-12 mt-5">
                            <img className="w-100" src="https://i.ibb.co/10nbgQK/healthcare2.png" alt="" />
                        </div>
                        <div className=" col-lg-4 col-sm-12 mt-5">
                            <img className="w-100" src="https://i.ibb.co/PZMrJ6m/healthcare3.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12 my-3 text-start">
                       <h3 className="text-info">SERVICE PROVIDED WEBSITE</h3>
                       <ul className="my-4">
                           <li>
                           This is healthe service website.
                           The user can choose the services from here as per his need.
                           </li>
                           <li>
                           If you are seek you can choose your package and booking your appointment.
                          If you wish you can cancel your appointment.
                           </li>
                           <li>
                           If a user wants to book a package, he will be taken to the login page and asked to login.
                            Once logged in, he will be able to book his package.
                           </li>
                       </ul>
                        <a href="https://react-healthcare-54209.web.app/"
                          className="niche-btn">Visit site</a>
                        <a href="https://github.com/kawsaralidev/healthcare-client"
                          className="niche-btn mx-4">Code link</a>
                         
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Healthcare;