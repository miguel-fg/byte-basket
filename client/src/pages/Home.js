// App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/home/Header";
import Support from "../components/home/Support";
import Stat from "../components/home/Stat";
import Sponsors from "../components/home/Sponsors";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

import "../App.css";

function Home() {
  return (
    <>
      <Header />
      <Support />
      <Stat />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
