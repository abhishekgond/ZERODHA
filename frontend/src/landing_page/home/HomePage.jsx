import React from "react";
import Hero from "./Hero";
import Awords from "./Awords";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Navbar from "../Navbar";

function HomePage() {
  return (
    <>
      <Hero />
      <Awords />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
