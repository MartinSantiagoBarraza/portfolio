import React from 'react';
import './Home.scss';
import croppedCvPicture from '../../assets/images/croppedCvPicture.png';
import Slide from 'react-reveal/Slide';
import { RoughNotation } from "react-rough-notation";

const Home = () => {
    return (
        <div className="home" id="home">
            <Slide top>
                <div className="home_description">
                    <h1>Hi there, I'm Santiago!</h1>
                    <p>Welcome to my portfolio! Here you'll find my story, projects and a way to get in touch with me.</p>
                    <p>I <RoughNotation type="highlight" animate="true" color="lightblue" show="true">love making apps</RoughNotation> that are user-friendly, simple and delightful. I am looking for my first <strong>Full Stack Development</strong> job.</p>
                </div>
            </Slide>
            <div className="home_image"><img src={croppedCvPicture} alt="Profile" /></div>
        </div>
    )
}

export default Home
