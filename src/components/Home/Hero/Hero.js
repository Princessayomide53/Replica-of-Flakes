import React, { useEffect } from "react";
import Ellipse4 from "../../../Assets/Ellipse4.webp";
import Ellipse5 from "../../../Assets/Ellipse5.webp";
// import Ellipse6 from "../../Assets/Ellipse6.webp";
// import button from "../../Assets/button.webp";
import Ellipse7 from "../../../Assets/Ellipse7.webp";
// import magic from "../../../Assets/magic.webp";
import Spotlight from "../../../Assets/Spotlight.webp";
import picture from "../../../Assets/picture.webp";
import Resume from "../../../Assets/Resume.pdf";
import Lamp from "./Lamp";
import { motion } from "framer-motion";

const Hero = () => {
  const blobStyle = {
    opacity: "1",
  };

  useEffect(() => {
    const preloadImages = () => {
      const images = [Ellipse4, Ellipse5, Ellipse7, Spotlight, picture];
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages();
  }, []);
  return (
    <>
      <section className="lg:h-[75rem] xl:h-[84rem] md:h-[67rem] h-[44rem] bg-[#040013]">
        <header>
          {" "}
          <div className="md:pt-[10.75rem] pt-[7rem]">
            <h1 className="md:text-[2rem] text-[1.25rem] px-7 md:px-0 lg:text-[2.3rem] xl:text-[3rem] text-white/90 leading-normal md:leading-[3.125rem] font-medium text-center z-50 ">
              Hello, I’m Folake Florence, <br />a{" "}
              <span className="font-bold text-white">Digital Product</span> and
              <span className="font-bold text-white">
                {" "}
                Interaction designer
              </span>
            </h1>
            <div className="pt-[1.31rem] flex justify-center  md:px-0">
              <p className="text-[#C979CF] text-[1.125rem] md:text-[1.275rem]  lg:text-[1.875rem] font-medium leading-normal tracking-[-0.05625rem]">
                I bring design
              </p>

              <p className="text-with-stroke text-[1.125rem] px-[5px] md:px-2 lg:mt-[4px] md:text-2xl  glow">
                magic
              </p>
              <p className="text-[#C979CF] text-center hidden md:flex text-[1.125rem] md:text-[1.275rem] lg:text-[1.875rem] font-medium leading-normal tracking-[-0.05625rem]">
                to mobile and web based applications
              </p>
              <p className="text-[#C979CF] text-center flex md:hidden text-[1.125rem] md:text-[1.275rem] lg:text-[1.875rem] font-medium leading-normal tracking-[-0.05625rem]">
                to mobile and
              </p>
            </div>
            <p className="text-[#C979CF] block md:hidden text-center text-[1.125rem] md:text-[1.275rem] lg:text-[1.875rem] font-medium leading-normal tracking-[-0.05625rem]">
              web based applications
            </p>
            <div className="relative">
              {/* <img
              src={Ellipse6}
              alt=""
              className="Ellipse2 absolute -top-[8rem] left-[28rem]"
            /> */}
            </div>
            <div className="flex flex-col relative justify-center mt-7 md:-mt-5 items-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                width="35%"
                id="blobSvg"
                style={{ opacity: 1 }}
                filter="blur(0px)"
                transform="rotate(0)"
                // className="hidden md:block"
              >
                <image
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  clipPath="url(#shape)"
                  href={picture}
                  preserveAspectRatio="none"
                  fill="white"
                ></image>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    {" "}
                    <stop offset="0%" style={{ stopColor: "white" }} />
                    <stop offset="100%" style={{ stopColor: "white" }} />{" "}
                  </linearGradient>{" "}
                </defs>{" "}
                <clipPath id="shape">
                  <path
                    id="blob"
                    fill="url(#gradient)"
                    style={{ ...blobStyle }}
                  >
                    {" "}
                    <animate
                      attributeName="d"
                      dur="10000ms"
                      repeatCount="indefinite"
                      values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
                    ></animate>{" "}
                  </path>{" "}
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    dur="9000ms"
                    repeatCount="indefinite"
                    className="blob-animation"
                  />
                </clipPath>
              </svg>

              <div className="absolute top-[2rem] right-[23rem]">
                <img src={Ellipse5} alt="" className=" Ellipse2" />
              </div>
              <div className="absolute top-[7rem] left-[17rem]">
                <img src={Ellipse7} alt="" className="Ellipse3" />
              </div>
            </div>
            {/* <div className="md:flex hidden flex-col relative justify-center mt-5 md:-mt-5 items-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="22%"
              id="blobSvg"
              style={{ opacity: 1 }}
              filter="blur(0px)"
              transform="rotate(0)"
            >
              <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                clipPath="url(#shape)"
                href={picture}
                preserveAspectRatio="none"
                fill="white"
              ></image>{" "}
              <defs>
                {" "}
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  {" "}
                  <stop offset="0%" style={{ stopColor: "white" }} />
                  <stop offset="100%" style={{ stopColor: "white" }} />{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <clipPath id="shape">
                <path id="blob" fill="url(#gradient)" style={{ ...blobStyle }}>
                  {" "}
                  <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
                  ></animate>{" "}
                </path>{" "}
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  dur="9000ms"
                  repeatCount="indefinite"
                />
              </clipPath>
            </svg>
            <div className="absolute top-[2rem] right-[23rem]">
              <img src={Ellipse5} alt="" className=" Ellipse2" />
            </div>
            <div className="absolute top-[7rem] left-[17rem]">
              <img src={Ellipse7} alt="" className="Ellipse3" />
            </div>
          </div> */}
            <div className="relative">
              <img
                src={Ellipse4}
                alt=""
                className="absolute -top-[18rem] right-5 Ellipse4"
              />
            </div>
            <div className="pt-[2.5rem] md:pt-[4.5rem] flex justify-center">
              <button className="btn text-white border-[1px] border-[#A57F98]">
                <a href={Resume} download="Resume" className="">
                  Download my CV
                </a>
              </button>
            </div>
            <div className="lg:w-[60rem] h-[4.5625rem] md:h-[7.0625rem]  md:pt-[7.75rem] bg-[#040013]  mx-auto">
              {/* <div className="w-[40rem] h-12  shadow-xl shadow-[#C979CF]/50 "> */}
              <img
                src={Spotlight}
                alt=""
                className="object-cover mt-[3.5rem] md:mt-[5.19rem]"
              />
              <Lamp />
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Hero;
