import React from "react";
import Connect from "./Connect";
import FooterTop from "./FooterTop";
import logo from "../icons/navlogo_white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "#1b1b1b" }}>
      <FooterTop />
      <Connect />
      <div className="footer__container">
        <div className="footer__copy">
          <img src={logo} alt="logo" className="footer__logo" />
          <br />
          <h3>
            Copyright <FontAwesomeIcon icon={faCopyright} /> 2021
          </h3>
        </div>
        <div className="footer__text">
          <hr />
          <h1>
            <span>
              {" "}
              <FontAwesomeIcon icon={faFacebookSquare} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
