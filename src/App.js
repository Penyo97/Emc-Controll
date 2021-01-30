import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer/Footer";

function App() {
  const [loader, setloader] = useState(true);

  library.add(fab, faBolt);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3500);
  }, []);
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
      },
    },
  };
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <motion.div variants={variants} initial="hidden" animate="visible">
          <Header />
          <Main />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
