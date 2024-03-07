import React from "react";
import { motion } from "framer-motion";
// import { LampContainer } from "./LampCotainer";

const Lamp = () => {
  return (
    <>
      {" "}
      {/* <LampContainer> */}
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center pb-[3rem] md:pb-[6.01rem] lg:pb-[9.01rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] md:-mt-7 lg:-mt-44 font-medium leading-normal text-white/80"
      >
        Featured Projects
      </motion.h1>
      {/* </LampContainer> */}
    </>
  );
};

export default Lamp;
