import React from "react";
import { Parallax } from "react-parallax";
import { NavLink } from "react-router-dom";
import "../../styles/homepage.css";
import profilepic from "../images/cropped-profile-pic-compressed.jpeg";
import map from "../images/usa-outline.png";
import houstonimg from "../images/houston.jpeg";

const CURRENT_ROLE = "data visualization developer at the Houston Chronicle";
const CURRENT_TASKS =
  "make interactive news apps for our newsroom, do frontend engineering and make custom visualizations";

let portfolioActiveStyle = {
  color: "#B6CCA1",
  textDecoration: "none",
};

let contactActiveStyle = {
  color: "#D0D38F",
  textDecoration: "none",
};

const Aboutpage = () => {
  return (
    <div className="home-container">
      <div className="top-container-with-bg">
        <Parallax
          blur={8}
          bgImage={houstonimg}
          bgImageAlt="the cat"
          strength={300}
        >
          <div className="top-flexbox">
            <div className="image-container fade-in">
              <div className="border"></div>
              <img
                className="profile-pic"
                src={profilepic}
                alt="photo of me!"
              />
            </div>
            <div className="message-container swing-in-top-fwd">
              <h1 className="welcome ">welcome!</h1>
              <div className="main-message-container">
                <h2 className="main-message">
                  I'm Kirk, currently a {CURRENT_ROLE}. I {CURRENT_TASKS}.
                </h2>
                <p>
                  Scroll to learn more about me, or{" "}
                  <NavLink
                    to="/portfolio"
                    style={({ isActive }) =>
                      isActive
                        ? portfolioActiveStyle
                        : {
                            color: "#2E294E",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }
                    }
                  >
                    see my work
                  </NavLink>{" "}
                  or learn how to{" "}
                  <NavLink
                    to="/contact"
                    style={({ isActive }) =>
                      isActive
                        ? contactActiveStyle
                        : {
                            color: "#2E294E",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }
                    }
                  >
                    get in contact
                  </NavLink>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="chevron">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevron-bounce"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </Parallax>
      </div>
      <div className="my-story-container">
        <div className="journalism-to-programming-container">
          <h2>journalism to programming</h2>
          <p>
            I started out as a traditional journalist, but fell in love with
            news design during my internship at the Chicago Tribune.
          </p>
          <p>
            During my internship, I started wondering how news design principles
            applied to the web. How can we present complex ideas in an
            easy-to-understand way?
          </p>
          <p>
            That started me down the deep rabbit hole of interactive news design
            and data visualization.
          </p>
        </div>
        <div className="resume-container">
          <h2 className="start-now" id="start">
            start:
          </h2>
          <div className="left-item">
            <div className="map-area">
              <div className="il-blip ping"></div>
              <img className="map" src={map}></img>
            </div>
            <div className="text-area">
              <h3>wheaton record</h3>
              <h4>editor in chief, designer, reporter</h4>
              <p>
                ...you name it. a small college newsroom means wearing multiple
                hats.
              </p>
              <p>
                we broke some{" "}
                <a href="https://www.washingtonpost.com/news/acts-of-faith/wp/2016/01/05/wheaton-is-planning-to-fire-professor-who-said-muslims-and-christians-worship-the-same-god/">
                  big stories
                </a>{" "}
                from our little campus in Illinois.
              </p>
            </div>
          </div>
          <div className="right-item">
            <div className="text-area">
              <h3>chicago tribune</h3>
              <h4>design intern</h4>
              <p>
                worked with brilliant journalists who opened my eyes to the
                world of news design.
              </p>
              <p>they let me design the front page :)</p>
            </div>
            <div className="map-area">
              <div className="il-blip ping"></div>
              <img className="map" src={map}></img>
            </div>
          </div>
          <div className="left-item">
            <div className="map-area">
              <div className="va-blip ping"></div>
              <img className="map" src={map}></img>
            </div>
            <div className="text-area">
              <h3>usa today</h3>
              <h4>intern, fellow</h4>
              <p>
                i did a little bit of everything, from reporting to video
                editing.
              </p>
              <p>
                my main job was fact-checking and editing for the opinion
                section.
              </p>
            </div>
          </div>
          <div className="right-item">
            <div className="text-area">
              <h3>providence magazine</h3>
              <h4>associate editor for media and design</h4>
              <p>
                lots of adobe indesign. i got to put my news design skills to
                the test.
              </p>
              <p>
                i also did audio engineering for their podcasts (one of my
                favorite hobbies).
              </p>
            </div>
            <div className="map-area">
              <div className="va-blip ping"></div>
              <img className="map" src={map}></img>
            </div>
          </div>
          <div className="left-item">
            <div className="map-area">
              <div className="pa-blip ping"></div>
              <img className="map" src={map}></img>
            </div>
            <div className="text-area">
              <h3>university of pittsburgh</h3>
              <h4>editorial production specialist</h4>
              <p>
                web things like CMS management and newsletter/product design.
              </p>
              <p>
                it was here that I really started ramping up my web dev skills
                on the side.
              </p>
            </div>
          </div>
          <div className="right-item">
            <div className="text-area">
              <h3>houston chronicle</h3>
              <h4>data visualization reporter</h4>
              <p>data analysis: python, qgis, etc.</p>
              <p>viz: datawrapper, javascript, mapbox</p>
              <p>my team reported on everything and anything data-related.</p>
            </div>
            <div className="map-area">
              <div className="tx-blip ping"></div>
              <img className="map" src={map}></img>
            </div>
          </div>
          <h2 className="start-now">now:</h2>
          <div className="left-item">
            <div className="map-area">
              <div className="tx-blip ping"></div>
              <img className="map" src={map}></img>
            </div>
            <div className="text-area">
              <h3>houston chronicle</h3>
              <h4>data visualization developer</h4>
              <p>
                creating custom viz, scrapers, trackers and news apps across the
                newsroom.
              </p>
              <p>react, javascript, css/less, html, python, node, aws </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
