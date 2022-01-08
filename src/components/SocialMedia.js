import React from "react";
import "../index.css";

import Timer from './Timer'

import Facebook from "../icon-facebook.svg";
import Instagram from "../icon-instagram.svg";
import Pinterest from "../icon-pinterest.svg";



function SocialMedia() {
  return (
    <div className="App">
     <div className="social-media-container">
        <h2>We are launching soon </h2>
          {/* <Countdown /> */}
          <Timer />
        <ul>
          <li>
            <img src={Facebook} className="FacebookIcon" alt="img1"></img>
          </li>
          <li>
            <img src={Pinterest} alt="img2"></img>
          </li>
          <li>
            <img src={Instagram} alt="img3"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialMedia;
