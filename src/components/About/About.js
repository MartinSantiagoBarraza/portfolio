import React from 'react';
import './About.scss';
import { RoughNotation } from "react-rough-notation";

const About = () => {
    return (
        <div className="about" id="about">
                <h2>About Me</h2>
            <p>Hello! I'm 24 years old,  working as an IT Recruiter at <strong>Avalith</strong> and studying Web Development at <strong>UNLaM</strong>. My goal is to work on a company as a <RoughNotation type="highlight" animate="true" color="lightgreen" show="true" customElement="span"><strong>Full Stack Developer</strong></RoughNotation>.</p>
            <p>I'm <RoughNotation type="highlight" animate="true" color="coral" show="true" customElement="span">passionate</RoughNotation> about <strong>programming</strong>, that's why I started studying Web Development 2 years ago. Since then, I've come a long way where I improved my skills and knowledge of programming languages and tools.</p>
            <p></p>
        </div>
    )
}

export default About
