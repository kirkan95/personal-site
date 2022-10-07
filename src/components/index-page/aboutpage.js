import React from "react";
import { Parallax } from "react-parallax";
import "../../styles/homepage.css";
import profilepic from "../images/cropped-profile-pic-compressed.jpeg";
import map from "../images/usa-outline.png";
import parallaxviz from "../images/fake-viz.png";

const currentRole = "data visualization developer at the Houston Chronicle";
const currentTasks =
  "make interactive news apps for our newsroom, which includes frontend and backend engineering";

const Aboutpage = () => {
  return (
    <div className="home-container">
      <div className="top-container-with-bg">
        <Parallax
          blur={5}
          bgImage={parallaxviz}
          bgImageAlt="the cat"
          strength={200}
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
                  I'm Kirk, currently a {currentRole}. I {currentTasks}.
                </h2>
                <p>
                  Scroll to learn more about me, or see my work and how to get
                  in contact above.
                </p>
              </div>
            </div>
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
                we broke some big stories from our little campus in Illinois.
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
