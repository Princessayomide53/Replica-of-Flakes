import React, { useEffect } from "react";
import Logo from "../../Assets/Logo.webp";
import { gsap, Power3 } from "gsap";

import { TweenMax } from "gsap/gsap-core";

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.to("body", {
      duration: 0.1,
      css: { overflowY: "hidden" },
      ease: "power3.inOut",
    })
      .to(".preloader", {
        duration: 0.03,
        css: { overflowY: "hidden", height: "100%" },
      })
      .from(".preloader", { duration: 2, y: "0" })
      .to(".preloader", {
        duration: 1,
        y: "-100%",
        delay: 7,
      })

      .to(".preloader", {
        duration: 0.05,
        css: { overflowY: "hidden", height: "unset" },
      })
      .to("body", {
        duration: 0.1,
        css: { overflowY: "scroll" },
        ease: Power3.inOut,
      });

    TweenMax.to(".image-container ", {
      duration: 0.8,
      opacity: 1,
      y: -20,
      ease: "power3.easeOut",
      delay: 0.8,
    });

    // Replace this with your actual content loading logic
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 10000); // Remove preloader after 20 seconds
  }, []);

  return (
    <>
      <div className="preloader bg-[#040013] w-full fixed h-screen justify-center items-center flex top-0 left-0 z-30">
        <div className="image-container  opacity-0">
          <img src={Logo} alt="" className="img" />
        </div>
        <div id="loader" className="image-container opacity-0">
          <div className="ls-particles ls-part-1"></div>
          <div className="ls-particles ls-part-2"></div>
          <div className="ls-particles ls-part-3"></div>
          <div className="ls-particles ls-part-4"></div>
          <div className="ls-particles ls-part-5"></div>
          <div className="lightsaber ls-left ls-green"></div>
          <div className="lightsaber ls-right ls-red"></div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
