import React from "react";
import { useState, useEffect } from 'react';

import "../index.css";

var now = new Date().getTime();



    var countDownDate = new Date("Feb 5, 2022 15:37:25").getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);



function CountdownOld() {
  return (
    <div className="countdown-container">
      <div className="days">
        <div className="number-wrapper">
          <h2>{days}</h2>
        </div>
        <p>days</p>
      </div>
      <div className="hours">
        <div className="number-wrapper">
          <h2>{hours}</h2>
        </div>
        <p>hours</p>
      </div>
      <div className="minutes">
        <div className="number-wrapper">
          <h2>{minutes}</h2>
        </div>
        <p>minutes</p>
      </div>
      <div className="seconds">
        <div className="number-wrapper">
          <h2>{seconds}</h2>
        </div>
        <p>seconds</p>
      </div>
    </div>
  );
}

export default CountdownOld;
