import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About__container" id="about">
      <div className="About__Text">
        <h1>Rólunk</h1>
        <br />
        <h3>
          „Vállalkozásunk 1995 januárjában alakult mint villamossági
          vállalkozás. Lakóépületek, ipari létesítmények, üzemcsarnokok és egyéb
          létesítmények külső és belső villanyszerelési munkáinak teljeskörű
          kivitelezésére és villamosbiztonságtechnikai felülvizsgálatára
          szakosodtunk. A folyamatos munkák és az egyre bővülő megrendelői kör,
          folyamatos fejlesztésekre és a megrendelők által támasztott igények
          magasabb szintű kiszolgálására ösztönzött engem és vállalkozásomat.
          Ennek érdekében megszereztem a villamos ipar területén használatos
          majdnem minden jogosultságot. A villamossági vállalkozás mellett
          2011-ben megalapítottam az EMC-Controll Kft.-t, melynek egyedüli
          tulajdonosa vagyok.
        </h3>
        <br />
        <h3>
          Napjainkban mind az egyéni vállalkozásban, mind a cégemben erősáramú
          villamosmérnökként, ügyvezetőként tevékenykedem.
        </h3>
        <br />
        <h3>
          Hitvallásomnak tartom a magasszintű, alapos és precíz munkavégzést.
          Munkáinkat is ebben a szellemben végezzük, folyamatosan bővítjük
          tudásunkat és nyomon követjük a villamos szakmában bekövetkező
          változásokat.”
        </h3>
        <br />
      </div>
      <div className="About__ImgContainer">
        <img src="https://via.placeholder.com/200" alt="about" />
        <div className="About__PictureText">
          <h3>Kovács István</h3>
          <h4>Ügyvezető</h4>
        </div>
      </div>
    </div>
  );
}

export default About;
