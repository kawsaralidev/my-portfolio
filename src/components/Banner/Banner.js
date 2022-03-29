import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className=" container">
                <div className="row">
                    <div style={{ marginTop: "-50px" }} className="col-lg-7 banner-section">
                        <div className="text-start">
                            <div className="text-start mt-5 text-white">
                                <h3 className="text-color">Hi!</h3>
                                <h2>Welcome To My Portfolio</h2>
                                <h1>
                                    I'm
                                    <span className="text-color"> Md Kawsar Ali</span>
                                </h1>
                            </div>

                            <br />

                            <div>
                                <ReactTypingEffect
                                    text={["React Developer", "Frontend Developer", "MERN Stack Developer"]}
                                    cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                                    displayTextRenderer={(text, i) => {
                                        return (
                                            <h1>
                                                {text.split("").map((char, i) => {
                                                    const key = `${i}`;
                                                    return (
                                                        <span key={key} className="text-color fs-1">
                                                            {char}
                                                        </span>
                                                    );
                                                })}
                                            </h1>
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "80px" }} className="col-lg-5">
                        <div className="img-container">
                            <img className="banner-img" src="https://i.ibb.co/k6Z38j6/kawsar.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* <div className="row ">
                    <div className=" col-lg-12 col-md-12 col-sm-12 ">
                        <div className="text-white text-center">
                            <h1>
                                <span style={{ color: "rgb(255, 0, 106)" }}>Hi!</span> Welcome To My World
                                <span style={{ color: "rgb(255, 0, 106)" }}>!</span>
                            </h1>
                            <h1>I am Md Kawsar Ali</h1>
                            <h1>a</h1>
                        </div>
                        <div class="wrapper  ">
                            <ul class="dynamic-txts text-center">
                                <li>
                                    <span>React Developer</span>
                                </li>
                                <li>
                                    <span>Frontend Developer</span>
                                </li>
                                <li>
                                    <span>Full Stack Developer</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;
