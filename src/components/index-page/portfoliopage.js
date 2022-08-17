import React from "react";
import PortfolioItem from "./portfolioitem";
import portfolioItemMap from "../data/portfolioitemmap.js";
import "../images/portfolio-images/astroworld.png";
import "../../styles/portfoliopage.css";

// to add portfolio items, go to portfolioitemmap.js
const portfolioItemList = [];

portfolioItemMap.forEach(function (object, itemName) {
  portfolioItemList.push(
    <PortfolioItem object={object} itemName={itemName} key={itemName} />
  );
});

const Portfoliopage = () => {
  return (
    <div className="port-main-container">
      <div className="intro-container">
        <h1 className="intro">stuff i've done</h1>
        <p className="disclaimer">
          Some of my projects are behind paywalls. If you'd like to see my
          paywalled projects in action, contact me!
        </p>
      </div>
      <div className="main-grid">{portfolioItemList}</div>
    </div>
  );
};

export default Portfoliopage;
