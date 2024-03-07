import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Connect from "./Main/Connect";
import Data from "./Main/Data";
import NavBar from "./NavBar/NavBar";
import transitions from "./transitions";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <Data />
      <Connect />
    </>
  );
};

export default transitions(Home);
