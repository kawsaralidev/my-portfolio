import React from "react";
import "./MyProject.css";

const MyProject = ({ project }) => {
    const { img, title, description, liveSite, githubLink, serverLink } = project;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="containers">
                <div class="card">
                    <div class="text-box">
                        <div class="content">
                            <h2 class="java2 fs-4">{title}</h2>
                            <p class="java text-white">{description}</p>
                            <div>
                                <a target="_blank" className="niche-btn" href={liveSite} rel="noreferrer">
                                    Live Site
                                </a>
                                <a target="_blank" style={{ marginLeft: "12px" }} className="niche-btn " href={githubLink} rel="noreferrer">
                                    Github Link
                                </a>
                            </div>
                            <br />
                            <a target="_blank" className="niche-btn mt-2" href={serverLink} rel="noreferrer">
                                Server Link
                            </a>
                        </div>
                    </div>
                    <div class="face face2">
                        <img className="w-100" src={img} alt="" />
                    </div>
                </div>
            </div>

            {/* <div className="containers">
                <div className="card-wrapper ">
                    <div className="card">
                        <div className="card-image">
                            <img src={img} alt="profile one" />
                        </div>

                        <div className="details">
                            <a className="niche-btn" href={liveSite}>
                                Live Site
                            </a>
                            <a className="niche-btn" href={githubLink}>
                                Github Link
                            </a>
                            <a className="niche-btn" href={serverLink}>
                                Server Link
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default MyProject;
