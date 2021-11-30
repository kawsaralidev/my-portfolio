import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MyProjects = () => {
    return (
        <div>
            <h1 className="m-5 text-primary">My Projects</h1>
           <div  className="bg-light">
               <div className="container  rounded">
                  <div className="row py-3">
                      
                      <div className=" col-lg-6 col-sm-12 mt-2">
                          <img className="w-100" src="https://i.ibb.co/B4H6LwQ/niche1.png" alt="" />
                      </div>
                      <div className="col-lg-6 col-sm-12 my-3 text-start">
                         <h3 className="text-info">NICHE ONLINE SHOP</h3>
                          <p  className=" my-4  text-gray">This is Motor Bike website and single page website.
                           I used to create this site React, React Router Dom, Node.js MongoDB server.
                           If you are user you can buy a product and if you wish cancel your order.
                           Users can add reviews to the website if they wish.</p>
                          <a   href="https://motor-bike-ec52d.web.app/"
                           className="niche-btn ">visit site</a>
                            <Button   className="niche-btne mx-4 " as={Link} to="/niche">Details</Button>
                      </div>
                  </div>
              </div>
           </div>
          < hr className="my-5"/>
          <div  className="bg-light">
                <div className="container rounded">
                    <div className="row py-3">
                        
                       
                        <div className="col-lg-6 col-sm-12 my-3 text-start">
                           <h3 className="text-info">TURISUM WEBSITE</h3>
                            <p className=" my-4  text-gray">This is online booking tourism website.
                             I used to create this site React, React Router Dom, Node.js MongoDB server.
                             You can choose your package and booking this.
                             If you wish you can cancel your booking package.
      
                             </p>
                            <a href="https://turism-authentication.web.app/"
                             className="niche-btn ">visit site</a>
                              <Button  className="niche-btne mx-4 " as={Link} to="/tourism">Details</Button>
                        </div>
                        <div className=" col-lg-6 col-sm-12 ">
                            <img className="w-100" src="https://i.ibb.co/4Y5wkrL/tourism1.png" alt="" />
                        </div>
                    </div>
                </div>
          </div>
          < hr className="my-5"/>

           <div className="bg-light">
               <div className="container rounded">
                  <div className="row py-3">
                      
                      <div className=" col-lg-6 col-sm-12 ">
                          <img className="w-75" src="https://i.ibb.co/qYgmr62/healthcare1.png" alt="" />
                      </div>
                      <div className="col-lg-6 col-sm-12 my-3 text-start">
                         <h3 className="text-info">SERVICE PROVIDED WEBSITE</h3>
                          <p className=" my-4  text-gray">This is healthe service website.
                          If you are seek you can shoose your package and biiking your appointment.
                          If you wish you can cancel your appointment.
                             </p>
                          <a href="https://react-healthcare-54209.web.app/"
                           className="niche-btn ">visit site</a>
                            <Button  className="niche-btne mx-4 " as={Link} to="/healthcare">Details</Button>
                      </div>
                  </div>
              </div>
           </div>

         
    </div>
    );
};

export default MyProjects;