import React from "react";
import "./Cards.scss";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={props.image} alt="Projects Cards" />
      </div>
      <div className="card_description">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="btns_container">
        <a href={props.demo} target="_blank" rel="noreferrer">
          <button className="demo_btn">
            <i class="fas fa-desktop"></i>
            Live Demo
          </button>
        </a>{" "}
        <a href={props.github} target="_blank" rel="noreferrer">
          <button className="github_btn">
            <i class="fab fa-github"></i> View Code
          </button>
        </a>{" "}
      </div>
    </div>
  );
};

export default Cards;
