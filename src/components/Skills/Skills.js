import React from "react";
import "./Skills.scss";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <Fade bottom>
        <div className="skills_list">
          <ul>
            <li>
              <i class="fab fa-html5 fa-4x"></i>
            </li>
            <li>
              <i class="fab fa-css3-alt fa-4x"></i>
            </li>
            <li>
              <i class="fab fa-react fa-4x"></i>
            </li>
            <li>
              <i class="fab fa-node fa-4x"></i>
            </li>
            <li>
              <i class="fab fa-sass fa-4x"></i>
            </li>
            <li>
              <i class="fas fa-database fa-4x"></i>
            </li>
            <li>
              <i class="fab fa-git fa-4x"></i>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
