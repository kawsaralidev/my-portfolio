import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div style={{ backgroundColor: "rgb(22, 22, 22)", boxShadow: "0px 0px 20px 0px #ffffff" }}>
            <div className="d-flex justify-content-center align-items-center">
                <div className="col-lg-4 col-sm-6 col-md-6"></div>
                <div className="py-5 col-lg-2 col-sm-6 col-md-6">
                    <h5 className=" text-white py-5 ">
                        © All Right Reserver By <br />
                        Md Kawsar Ali
                    </h5>
                </div>
                <div className="footer-icon-box col-lg-2 col-sm-6 col-md-6">
                    <h5 className="text-white">Follow Me</h5>
                    <span className="text-white">
                        <a target="_blank" href="https://www.facebook.com/kawsaralidev" rel="noreferrer">
                            <i class="fab fa-facebook fs-3"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/kawsaralidev/" rel="noreferrer">
                            <i class="fab fa-linkedin fs-3"></i>
                        </a>
                        <a target="_blank" href="https://github.com/kawsaralidev" rel="noreferrer">
                            <i class="fab fa-github fs-3"></i>
                        </a>
                    </span>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6"></div>
            </div>
        </div>
    );
};

export default Footer;
