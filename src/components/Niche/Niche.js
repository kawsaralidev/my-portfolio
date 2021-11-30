import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Niche.css'

const Niche = () => {
    return (
        <div className=" bg-light">
            <div className="container bg-light rounded">
              <div className=" row py-3">
                  
                  <div className="d-flex col-lg-12 col-sm-12">
                      <div className="  col-lg-4  col-sm-12 mt-5">
                          <img className="w-100" src="https://i.ibb.co/B4H6LwQ/niche1.png" alt="" />
                      </div>
                      <div className=" col-lg-4 px-3  col-sm-12 mt-5">
                          <img className="w-100" src="https://i.ibb.co/GFT58mZ/niche2.png" alt="" />
                      </div>
                      <div className=" col-lg-4 col-sm-12 mt-5">
                          <img className="w-100" src="https://i.ibb.co/VSVzt0s/niche3.png" alt="" />
                      </div>
                  </div>
                  <div className="col-lg-12 col-sm-12 my-3 text-start">
                     <h3 className="text-info">NICHE ONLINE SHOP</h3>
                      <ul className="my-4">
                          <li>
                          This is Motor Bike website and single page website.
                       I used to create this site React, React Router Dom, Node.js MongoDB server.
                      
                          </li>
                          <li>
                          If you are user you can buy a product and if you wish cancel your order.
                       Users can add reviews to the website if they wish.
                              
                          </li>
                          <li>
                          If you are an admin then you can add product to the website and you can make someone admin if you want.
                          </li>
                          <li>
                          No user will be able to see the dashboard and purchase any product until they have logged in.
                          </li>
                          <li>
                          A user can easily use the website and the user can give reviews and ratings on the website.
                          </li>
                      </ul>
                       <a href="https://motor-bike-ec52d.web.app/"
                           className="niche-btn">visit site</a>
                       <a href="https://github.com/kawsaralidev/motor-bike"
                           className="niche-btn mx-4">Code link</a>
                       <a href="https://github.com/kawsaralidev/motor-bikes-server"
                           className="niche-btn">Server code link</a>
                           
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Niche;