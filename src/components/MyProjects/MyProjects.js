import React from 'react';


const MyProjects = () => {
    return (
        <div className="">
            <h1 className="m-5 text-primary">My Projects</h1>
           <div className="container bg-primary rounded">
              <div className="row py-3">
                  
                  <div className=" col-lg-6 col-sm-12 mt-5">
                      <img className="w-75" src={""} alt="" />
                  </div>
                  <div className="col-lg-6 col-sm-12 my-3 text-start">
                     <h3 className="text-white">NICHE ONLINE SHOP</h3>
                      <p className=" my-4  text-white">This is Motor Bike website and single page website.
                       I used to create this site React, React Router Dom, Node.js MongoDB server.
                       If you are user you can buy a product and if you wish cancel your order.
                       Users can add reviews to the website if they wish.</p>
                      <a href="https://motor-bike-ec52d.web.app/" className="bg-white text-decoration-none  p-2 rounded mt-4 fs-5 fw-bold">visit site</a>
                  </div>
              </div>
          </div>
          < hr className="my-5"/>
          <div className="container bg-primary rounded">
              <div className="row py-3">
                  
                  <div className=" col-lg-6 col-sm-12 mt-5">
                      <img className="w-75" src={""} alt="" />
                  </div>
                  <div className="col-lg-6 col-sm-12 my-3 text-start">
                     <h3 className="text-white">TURISUM WEBSITE</h3>
                      <p className=" my-4  text-white">This is online booking tourism website.
                       I used to create this site React, React Router Dom, Node.js MongoDB server.
                       You can choose your package and booking this.
                       If you wish you can cancel your booking package.

                       </p>
                      <a href="https://motor-bike-ec52d.web.app/" className="bg-white text-decoration-none  p-2 rounded mt-4 fs-5 fw-bold">visit site</a>
                  </div>
              </div>
          </div>
          < hr className="my-5"/>

          <div className="container bg-primary rounded">
              <div className="row py-3">
                  
                  <div className=" col-lg-6 col-sm-12 mt-5">
                      <img className="w-75" src={""} alt="" />
                  </div>
                  <div className="col-lg-6 col-sm-12 my-3 text-start">
                     <h3 className="text-white">SERVICE PROVIDED WEBSITE</h3>
                      <p className=" my-4  text-white">This is healthe service website.
                      If you are seek you can shoose your package and biiking your appointment.
                      If you wish you can cancel your appointment.
                         </p>
                      <a href="https://motor-bike-ec52d.web.app/" className="bg-white text-decoration-none  p-2 rounded mt-4 fs-5 fw-bold">visit site</a>
                  </div>
              </div>
          </div>
         
    </div>
    );
};

export default MyProjects;