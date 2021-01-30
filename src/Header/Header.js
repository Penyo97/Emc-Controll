import React from "react";
import video from "../video/background.mp4";
import VideoBg from "./VideoBg";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="Header__container" id="header">
      <Navbar />
      <VideoBg video={video} />
    </div>
  );
}

export default Header;
