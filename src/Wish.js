import React from "react";
import ReactDOM from "react-dom";

function Wish() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3";
  } else if (hours >= 18 && hours < 20) {
    timeOfDay = "Evening";
    styles.color = "#7D3C98 ";
  } else {
    timeOfDay = "night";
    styles.color = "#D90000";
  }

  return (
    <div>
      <h1 style={styles}>Good {timeOfDay} Admin!</h1>
    </div>
  );
}
export default Wish;
