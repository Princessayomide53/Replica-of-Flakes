import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Connect from "./Main/Connect";
import Data from "./Main/Data";
import NavBar from "./NavBar/NavBar";
import transitions from "./transitions";

const Home = (props) => {
  useEffect(() => {
    // props.onHomeClick();
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <div className="">
      <NavBar />
      <Hero />
      <Data />
      <Connect />
    </div>
  );
};

export default transitions(Home);
