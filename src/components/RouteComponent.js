import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Contact from "./Routes/Contact/Contact";
import About from "./Routes/Contact/About";
import Project from "./Routes/Contact/Project";
import { AnimatePresence } from "framer-motion";

const RouteComponent = () => {
  return (
    <div>
      <AnimatePresence mode="wait">
        <Router>
          <Routes>
            {/* <NavBar /> */}
            <Route path="/" exact element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </div>
  );
};

export default RouteComponent;
