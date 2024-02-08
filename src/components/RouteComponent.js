import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Contact from "./Routes/Contact/Contact";
import About from "./Routes/Contact/About";

const RouteComponent = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <NavBar /> */}
          <Route path="/" exact element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteComponent;
