import React from "react";
import "./AboutIll.css";
import Lamp from "./Lamp";
import Services from "./Services";

function AboutIll() {
  return (
    <div className="AboutIll__Container">
      <Lamp />
      <div className="circle"></div>
      <Services />
    </div>
  );
}

export default AboutIll;
