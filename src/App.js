import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Preloader from "./components/Preloader/Preloader";

function App() {
  // const [preloaderLoaded, setPreloaderLoaded] = useState(true);

  // const handleHomeClick = () => {
  //   setPreloaderLoaded(false);
  // };
  return (
    <>
      <div className="overflow-hidden">
        <Preloader />
        <Home />
      </div>
    </>
  );
}

export default App;
