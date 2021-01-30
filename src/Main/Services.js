import React, { useEffect, useState } from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import service from "../icons/ElServicesColors.svg";

function Services() {
  const style = {
    padding: "5px",
  };
  const [img, setimg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 660) {
        setimg(true);
      } else setimg(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="Services__Container">
      <img
        src={service}
        alt="service"
        className={`Service__Img ${img && "ImgDisplay"}`}
      />
      <div className="Services__Text">
        <h2>
          Jelenleg cégünk az egész ország területén nyújtja az alábbi
          szolgáltatásokat:
        </h2>
        <div className="Services__Options">
          <h3 style={style}>
            <FontAwesomeIcon icon="bolt" /> Felelős műszaki vezetés (főként
            napelemes erőművek esetében)
          </h3>
          <h3 style={style}>
            <FontAwesomeIcon icon="bolt" /> Műszaki ellenőrzés (főként napelemes
            erőművek esetében)
          </h3>
          <h3 style={style}>
            <FontAwesomeIcon icon="bolt" /> Villamosbiztonságtechnikai
            felülvizsgálatok
          </h3>
          <h3 style={style}>
            <FontAwesomeIcon icon="bolt" /> Robbanásbiztos berendezések
            felülvizsgálata
          </h3>
          <h3 style={style}>
            <FontAwesomeIcon icon="bolt" /> Projekt menedzsment
          </h3>
          <h3 style={style}>
            <FontAwesomeIcon icon="bolt" /> Villamos anyagkereskedelem
          </h3>
          <h3 style={style}>
            <FontAwesomeIcon icon="bolt" /> Villamos tervdokumentációk készítése
          </h3>
        </div>
        <h3>
          Követve a klímavédelmi trendeket napjaink fő profiljává a napelemes
          rendszerek váltak.
        </h3>
        <h3 className="Service__More">
          Szolgáltatásainkról bővebb információért böngésszen honlapunkon vagy
          érdeklődjön a kapcsolat menüpontban található elérhetőségeken.
        </h3>
      </div>
      <div></div>
    </div>
  );
}

export default Services;
