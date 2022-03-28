import React from "react";
import { Button } from "react-bootstrap";
import "./MyProject.css";

const MyProject = ({ project }) => {
    const { img, title, description } = project;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="containers">
                <div className="card-wrapper ">
                    <div className="card">
                        <div className="card-image">
                            <img src={img} alt="profile one" />
                        </div>

                        <div className="details">
                            <Button className="niche-btn " to="/home">
                                Live Site
                            </Button>
                            <Button className="niche-btn " to="/home">
                                Github Link
                            </Button>
                            <Button className="niche-btn " to="/home">
                                Server Link
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProject;
