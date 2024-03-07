import React from "react";
import { motion } from "framer-motion";

const transitions = (OgComponent) => {
  // Return a functional component
  return (props) => {
    return (
      <>
        {/* Render the original component with props */}
        <OgComponent {...props} />
        {/* Define motion components for transitions */}
        <motion.div
          className="slides-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slides-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };
};

export default transitions;
