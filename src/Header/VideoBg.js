import React from "react";
import "./VideoBg.css";
import arrow from "../icons/chevron-down.svg";

function VideoBg({ video }) {
  return (
    <div>
      <video muted autoPlay loop className="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="video__fadebotton">
        <div>
          <img src={arrow} alt="arrow" className="video__arrow" />
        </div>
      </div>
    </div>
  );
}

export default VideoBg;
