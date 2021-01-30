import React from "react";
import "./Reference.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import book from "../icons/book.svg";

function Reference() {
  return (
    <div className="Reference__Container" id="reference">
      <div className="Reference__Text">
        <h1>Referenciák</h1>
        <br />
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> Csengelei kóser
          libavágóhíd: felelős műszaki vezetés
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> Budapesten számos
          társasházban végzett műszaki ellenőrzés
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> Bonyhádi biogáz
          erőmű: felelős műszaki vezetés
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> Szarvasi mozzarella
          Kft. sajt raktárai: felelős műszaki vezetés
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> Budapesti
          rehabilitációs intézmény: felelős műszaki vezetés
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> Budapest főváros
          kormányhivatala:központi földhivatal és intézményeinek villamos
          biztonságtechnikai felülvizsgálata
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> TRIGO Kft.
          telephelyei: Felelős műszaki vezetés és villamosbiztonságtechnikai
          felülvizsgálatok
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> Baja város
          önkormányzatánál: 36 lakásos társasház felelős műszaki vezetése
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> Puskás Ferenc
          stadion: robbanásbiztos berendezések felülvizsgálata
        </h2>
        <h2>
          <FontAwesomeIcon icon="bolt" className="bolt" /> AUDI Hungária Zrt.
          logisztikai csarnokok tetején létesített naperőmű: projektmenedzsment
          és villamosbiztonságtechnikai felülvizsgálatok
        </h2>
      </div>
      <div>
        <img src={book} alt="book" className="book" />
      </div>
    </div>
  );
}

export default Reference;
