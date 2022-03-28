import React, { useEffect, useState } from "react";
import MySkill from "./MySkill";

const MySkills = () => {
    const [skills, setSkill] = useState([]);

    useEffect(() => {
        fetch("./skillData.json")
            .then((res) => res.json())
            .then((data) => setSkill(data));
    }, []);
    return (
        <div style={{ backgroundColor: "rgb(22, 22, 22)" }}>
            <div className="container py-5">
                <div className="skills">
                    <h1 className="text-white "> My Skills</h1>
                    <span></span>
                </div>
                <div className="row mt-3">
                    {skills.map((skill) => (
                        <MySkill key={skill.id} skill={skill}></MySkill>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MySkills;
