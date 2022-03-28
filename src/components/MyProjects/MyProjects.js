import React, { useEffect, useState } from "react";
import MyProject from "./MyProject";

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("./projectsData.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);
    return (
        <div style={{ backgroundColor: "rgb(22, 22, 22)" }}>
            <div className="container">
                <h1 style={{ color: "rgb(255, 0, 106)", marginBottom: "50px" }}>My Projects</h1>
                <div className="row">
                    {projects.map((project) => (
                        <MyProject key={project.id} project={project}></MyProject>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
