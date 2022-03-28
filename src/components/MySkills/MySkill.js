import React from "react";
import "./MySkill.css";

const MySkill = ({ skill }) => {
    const { title, img } = skill;
    return (
        <>
            <div className="col-lg-3">
                <div className="skill-box">
                    <div className="skill-img">
                        <img className="images" src={img} alt="" />
                    </div>
                </div>
                <h4 className="text-white">{title}</h4>
            </div>
        </>
    );
};

export default MySkill;
