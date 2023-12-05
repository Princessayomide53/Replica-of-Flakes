import React, { useEffect } from "react";

import { preLoaderAnim } from "../../Animation/index";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  });
  return (
    <div className="preloader bg-black h-screen justify-center items-center flex">
      <div className="texts-container">
        <h2 className="font-bold text-white text-6xl text-center">
          Flakes UI/UX
        </h2>
      </div>
    </div>
  );
};

export default Preloader;
