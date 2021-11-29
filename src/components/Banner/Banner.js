import React from 'react';


const Banner = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row">
                    <div className=" col-lg-6 col-sm-12 mt-5">

                        <img className="w-75" src={""} alt="" />

                    </div>
                    <div className="col-lg-6 col-sm-12 my-3 text-start">
                        
                        <h2 className="fs-1 fw-bold text-info  ">MD KAWSAR ALI<br /> MERN STACK WEB DEVELOPER</h2>
                        <p className=" my-4">You can contact me if you want to do any project or 
                           need any employee <br /> in your company.</p>
                        <a href="https://drive.google.com/file/d/1QfIrhj9Zzi02D1WtosHnuD5ApoXiBsTX/view" 
                        className="bg-primary text-white text-decoration-none p-2 rounded  fs-5 fw-bold">
                            Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;