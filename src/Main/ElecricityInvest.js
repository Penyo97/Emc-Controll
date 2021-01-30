import React from "react";
import "./ElecricityInvest.css";
import protect from "../icons/protection.svg";

function ElecricityInvest() {
  return (
    <div className="Elecricity" id="elecricity">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1b1b1e"
          fillOpacity="1"
          d="M0,224L26.7,202.7C53.3,181,107,139,160,122.7C213.3,107,267,117,320,117.3C373.3,117,427,107,480,112C533.3,117,587,139,640,128C693.3,117,747,75,800,85.3C853.3,96,907,160,960,160C1013.3,160,1067,96,1120,58.7C1173.3,21,1227,11,1280,10.7C1333.3,11,1387,21,1413,26.7L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <div className="Elecricity__Container">
        <div className="Elecricity__Text">
          <h1>Villamosbiztonságtechnikai felülvizsgálatok:</h1>
          <br />
          <h2>
            A villamosbiztonságtechnikai felülvizsgálatok cégünk legősibb
            szolgáltatását képzik, mi sem bizonyítja ezt jobban széleskörű
            kínálatunknál.
          </h2>
          <h2>
            Az áramütéselleni védelem szabványossági felülvizsgálatától kezdve a
            kisfeszültségű erősáramú villamos berendezések időszakos tűzvédelmi
            felülvizsgálatán, a norma és nem norma szerinti villámvédelmi
            felülvizsgálatokon át egészen a robbanásbiztos berendezések
            felülvizsgálatáig rendelkezünk jogosultságokkal.
          </h2>
          <h2>
            Napra készen követjük és be tartjuk a hatályos előírásokat,
            jogszabályokat és szabványokat.
          </h2>
        </div>
        <div>
          <img src={protect} alt="protect" className="Elecricity__Img" />
        </div>
      </div>
    </div>
  );
}

export default ElecricityInvest;
