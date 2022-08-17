import React from "react";
import "../images/portfolio-images/astroworld.png";
import "../../styles/portfolioitem.css";

const PortfolioItem = (props) => {
  return (
    <div className="card-container">
      {/* <div className="img-container">
        <img src={props.object.imgUrl} alt="description" />
        <p>{props.object.imgUrl}</p>
      </div> */}
      <div className="title">
        <h2>
          <a href={props.object.pageLink} tabIndex="1">
            {props.object.displayTitle}
          </a>
        </h2>
      </div>
      <div className="info-box">
        <h3 className="deck">{props.object.deck}</h3>
        <p className="tasks">What I did: {props.object.tasks}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
