import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Connect from "./Main/Connect";
import Data from "./Main/Data";
import NavBar from "./NavBar/NavBar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <div>
      {" "}
      <NavBar />
      <Hero />
      <Data />
      <Connect />
    </div>
  );
};

export default Home;
