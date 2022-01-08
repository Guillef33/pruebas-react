import React, { useState, useEffect, useRef } from "react";
import "../index.css";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

const INITIAL_COUNT = 86400;

export default function CountdownApp() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);

  const secondsToDisplay = secondsRemaining % 60;

  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;
  const hoursRemaining = hoursToDisplay % 24;
  
  const daysToDisplay = (hoursToDisplay - hoursRemaining) / 24;


  const handleStart = () => {
    setStatus(STATUS.STARTED);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );

      return (
        <>
          <div className="countdown-container">
            <div className="days">
              <div className="number-wrapper">
                <h2>{twoDigits(daysToDisplay)}</h2>
              </div>
              <p>days</p>
            </div>
            <div className="hours">
              <div className="number-wrapper">
                <h2>{twoDigits(hoursToDisplay)}</h2>
              </div>
              <p>hours</p>
            </div>
            <div className="minutes">
              <div className="number-wrapper">
                <h2>{twoDigits(minutesToDisplay)}</h2>
              </div>
              <p>minutes</p>
            </div>
            <div className="seconds">
              <div className="number-wrapper">
                <h2>{twoDigits(secondsToDisplay)}</h2>
              </div>
              <p>seconds</p>
            </div>
          </div>
          <div className="countdown-container">
            <button
              onClick={handleStart}
              type="button"
              className="number-wrapper"
            >
              Start
            </button>
            <button
              onClick={handleStop}
              type="button"
              className="number-wrapper"
            >
              Stop
            </button>
            <button
              onClick={handleReset}
              type="button"
              className="number-wrapper"
            >
              Reset
            </button>
          </div>
        </>
      );
}

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, "0");
