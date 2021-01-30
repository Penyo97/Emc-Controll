import React, { useEffect, useState } from "react";
import About from "./About";
import AboutIll from "./AboutIll";
import bck from "../icons/about_back.svg";
import lig from "../icons/lightning.svg";
import "./Main.css";
import ElecricityInvest from "./ElecricityInvest";
import Reference from "./Reference";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Main() {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setvisible(true);
      } else setvisible(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        className={`Main__Button ${visible && "visible"}`}
        onClick={() => {
          document
            .getElementById("header")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </Button>
      <div className="Main__container">
        <div className="Main__img">
          <img src={bck} alt="aboutBack" />
          <img src={lig} alt="lig1" className="lig1" />
          <img src={lig} alt="lig2" className="lig2" />
          <img src={lig} alt="lig3" className="lig3" />
        </div>
        <About />
        <br />
        <AboutIll />
        <ElecricityInvest />
        <Reference />
      </div>
    </div>
  );
}

export default Main;
