import React from "react";
import "./About.css"


const About = () => {
  return (
    <div className="row g-0"> 
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title text-center">About</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ea
              quae fugit mollitia, odio dicta culpa voluptate incidunt dolorum
              ill
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title text-center">Skills</h5>
            <ul className="card-text centered-list">
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
        <li>Skill 4</li>
        <li>Skill 5</li>
      </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
