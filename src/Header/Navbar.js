import React, { useState, useEffect } from "react";
import logo from "../icons/navlogo_white.svg";
import "./Navbar.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

function Navbar() {
  const [open, setopen] = useState(false);
  const [openmenu, setopenmenu] = useState(false);
  const [navbar, setnavbar] = useState(false);
  const click = () => {
    setopen(true);
  };
  const subclick = () => {
    setopenmenu(!openmenu);
  };
  const close = (e) => {
    if (e.type === "click") {
      setopen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setnavbar(true);
      } else setnavbar(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`Navbar__container ${navbar && "Navbar__black"}`}>
      <img src={logo} alt="logo" className="Navbar__logo" />
      <div className="Navbar__menubox">
        <MenuIcon className="Navbar__menu" onClick={click} />
      </div>
      <Drawer
        open={open}
        anchor="right"
        onClose={close}
        className="Navbar__drawer"
      >
        <List>
          <ListItem button>
            <ListItemText>
              <h3
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Rólunk
              </h3>
            </ListItemText>
          </ListItem>

          <ListItem button onClick={subclick}>
            <ListItemText>
              <h3>Szolgáltatásaink</h3>
            </ListItemText>
            {openmenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openmenu} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItem button>
                <ListItemText>
                  <h4
                    onClick={() =>
                      document
                        .getElementById("elecricity")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Villamosbiztonságtechnikai <br />
                    felülvizsgálat
                  </h4>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemText>
                  <h4>Napelemes erőművek</h4>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemText>
                  <h4>Villamosági tervezés</h4>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemText>
                  <h4>Villamos anyagkereskedelem</h4>
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>

          <ListItem button>
            <ListItemText>
              <h3
                onClick={() =>
                  document
                    .getElementById("reference")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Referenciák
              </h3>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText>
              <h3
                onClick={() =>
                  document
                    .getElementById("connect")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Kapcsolat
              </h3>
            </ListItemText>
          </ListItem>

          <ListItem button onClick={() => setopen(false)}>
            <ListItemText>
              <h3>Kilépés</h3>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;
