import React from "react";


let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

function Javascript() {
  var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
  console.log(countDownDate);

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div>
      <p>
        {" "}
        {days} "d " + {hours} + "h " + {minutes} + "m " + {seconds} + "s "{" "}
      </p>
    </div>
  );
} 

export default Javascript;
