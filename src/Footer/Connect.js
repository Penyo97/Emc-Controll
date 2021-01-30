import React from "react";
import "./Connect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import MiniMap from "./MiniMap";

function Connect() {
  const RandomColor = () => {
    let colors = ["#FAA916", "#35CE8D", "#87F5FB", "#93061a"];
    let color = colors[Math.floor(Math.random() * 4)];
    return color;
  };
  return (
    <div className="connect__container" id="connect">
      <div className="connect__text">
        <h1>Kapcsolat</h1>
        <br />
        <h3>
          <FontAwesomeIcon
            icon={faHouseUser}
            style={{ color: RandomColor() }}
            className="connect__icon"
          />
          Székhely: 6440 Jánoshalma, Kisfaludy u. 58.
        </h3>
        <h3>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: RandomColor() }}
            className="connect__icon"
          />
          Email: kovacs001@gmail.com
          <span
            style={{ color: RandomColor(), paddingRight: 5, paddingLeft: 2 }}
          >
            ;
          </span>
          kovacsgabor.hivatalos@gmail.com
        </h3>
        <h3>
          <FontAwesomeIcon
            icon={faPhoneAlt}
            style={{ color: RandomColor() }}
            className="connect__icon"
          />
          Mobil: +36 30 968 8067
          <span
            style={{ color: RandomColor(), paddingRight: 5, paddingLeft: 2 }}
          >
            ;
          </span>
          +36 30 665 4532
        </h3>
      </div>
      <div className="connect__map">
        <MiniMap />
      </div>
    </div>
  );
}

export default Connect;
