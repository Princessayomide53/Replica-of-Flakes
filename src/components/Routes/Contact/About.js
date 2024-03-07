import React, { useEffect } from "react";
import NavBar from "../../Home/NavBar/NavBar";
import G1 from "../../../Assets/G1.webp";
import G2 from "../../../Assets/G2.webp";
import G3 from "../../../Assets/G3.webp";
import G4 from "../../../Assets/G4.webp";
import Ellipse8 from "../../../Assets/Ellipse8.webp";
import Connect from "../../Home/Main/Connect";
import Resume from "../../../Assets/Resume.pdf";
import transitions from "../../Home/transitions";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <>
      <section className="overflow-hidden bg-[#040013] h-[148rem] md:h-[165rem] lg:h-[177.625rem] xl:h-[180.625rem] ">
        <NavBar />
        <div className="pt-[7.95rem] md:pt-[15.75rem] relative">
          <h2 className="text-white text-center text-[1.25rem] px-7 md:px-0 md:text-[2.2rem] leading-normal xl:text-[2.5rem] font-medium md:leading-[2.5rem] tracking-[0.0125rem]">
            Hi, my name is Folake Florence and I love things that move
          </h2>
          <div className="absolute left-1/2 top-16 z-20">
            <img src={Ellipse8} alt="" className="Ellipse5" />
          </div>
          <div className="flex flex-col md:flex-row  md:justify-center max-w-[21.5rem] md:max-w-[43rem] lg:max-w-[65rem] xl:max-w-[73rem] mx-auto gap-0 md:gap-[2rem] lg:gap-[2rem] pt-[2.5rem] md:pt-[5rem]">
            <img
              src={G1}
              alt=""
              className="lg:w-[56.5rem] w-[20.8445rem] h-[19.07269rem]  xl:w-[63rem] md:w-[43rem] md:h-[28.375rem] lg:h-[39.375rem] object-cover rounded-md"
            />
            {/* <span className="flex md:flex md:flex-col md:gap-[2.5rem] pt-[1.5rem] md:pt-0 gap-[1.1rem]">
              <img
                src={G2}
                alt=""
                className="w-[9.92925rem] h-[9.8675rem] md:w-full md:h-[13rem] lg:w-[20rem] lg:h-[18.5rem]"
              />
              <img
                src={G3}
                alt=""
                className="w-[9.92925rem] h-[9.8675rem] md:w-full md:h-[13rem] lg:w-[20rem] lg:h-[18.5rem]"
              />
            </span> */}
          </div>

          <p className="text-white/90 max-w-[21.5rem]  md:max-w-[43rem] text-base lg:max-w-[57rem] xl:max-w-[73rem] pt-[2.49rem]  mx-auto md:pt-[4.94rem] flex justify-center lg:text-lg xl:text-[1.25rem] font-medium leading-[2rem] tracking-[0.00625rem]">
            I started product design as way to establish a defined career path
            and discovered that designing was both fun,
            <br className="hidden xl:block" /> engaging and meaningful.
            <br />
            <br />
            What i fancy most about design is seeing my ideas materialize into
            solutions that actual users engage with. The
            <br className="hidden xl:block" /> entire process from
            conceptualization to user interaction fascinates me. I also love
            that i get to use my designs
            <br className="hidden xl:block" /> to create products that solve
            users problem and work on amazing projects that improve lives.{" "}
          </p>
          <div className="pt-[3.62rem] md:pt-[7.12rem] flex flex-col-reverse max-w-[21.5rem] md:max-w-[43rem] md:flex-row md:justify-evenly lg:max-w-[57rem] xl:max-w-[70rem] mx-auto">
            <div>
              <h5 className="text-[1.24238rem] md:text-[1.5375rem] pt-[0.5rem] pb-[2rem] text-white font-medium leadng-[2rem] tracking-[0.00969rem]">
                Hobbies and Funfacts
              </h5>

              <p className="text-white hidden md:gap-5 lg:gap-0 md:text-xs md:flex text-[0.80156rem] leading-[2rem] lg:text-lg xl:text-[1.25rem] font-normal md:leading-[1.567rem] lg:leading-[2rem]">
                I designed a web application for the Lagos State
                <br className="" /> Residents Registration Agency (LASSRA) to
                help <br />
                track the delivery, relocation and status of resident <br />
                identity cards.
                <br />
                <br />
                My favorite cuisine is chinese cuisine.
                <br />
                <br />
                My dream destination used to be Bora Bora, now
                <br />
                its Singapore and South Korea
                <br />
                <br />I started learning French and Korean language last year
                <br />
                <br />I looooooove my hot ginger and tumeric tea!
              </p>
              <p className="text-white block md:gap-5 lg:gap-0 leading-[1.28244rem] md:hidden text-[0.80156rem] lg:text-lg xl:text-[1.25rem] font-normal">
                I did a contract work for lassra which is under lagos
                <br className="" /> state government. Designed a card tracking
                <br />
                website for relocation, delivery of your lassra card.
                <br />
                <br />
                My favorite cuisine is chinese cuisine.
                <br />
                <br />
                My dream destination used to be Bora Bora, now
                <br />
                its Singapore and South Korea
                <br />
                <br />I started learning French and Korean language last year
                <br />
                <br />I looooooove my hot ginger and tumeric tea!
              </p>
            </div>
            <img
              src={G4}
              alt=""
              className="md:w-[22rem] md:h-[25.5rem] md:pt-[2rem] lg:w-[28rem] lg:h-[29rem]"
            />
          </div>
          <div className="md:pt-[8.28rem] pb-[3rem] md:pb-[4rem] pt-[3.28rem]  md:space-y-0 flex justify-around max-w-[70rem] place-content-center mx-auto">
            <div>
              <h5 className="text-base md:text-[1.9375rem] pt-[0.5rem] pb-[1rem] text-white font-medium leading-[2rem] tracking-[0.00969rem]">
                <span className="skills -mt-1">Key</span> Skills
              </h5>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Virtual design
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Wireframing
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                UX design
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Typograpy
              </p>
              <p className="text-white text-sm md:text-[1.25rem]  font-normal leading-normal">
                Prototyping
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Interaction design
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Branding
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Art direction
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Responsive design
              </p>
            </div>
            <div className="">
              <h5 className="text-sm md:text-[1.9375rem] pt-[0.5rem] pb-[1rem] text-white font-medium leading-[2rem] tracking-[0.00969rem]">
                <span className="skills -mt-1">Soft</span> Skills
              </h5>

              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Communication
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Collaboration
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Problem solving
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Attention to detail
              </p>
              <p className="text-white text-sm md:text-[1.25rem] font-normal leading-normal">
                Time management
              </p>
            </div>
          </div>
          <div className="xl:pt-[4.53rem] pb-[4rem] md:pb-[6rem] lg:pt-[4.53rem] lg:pb-[4.53rem] xl:pb-[3.5rem] flex justify-center">
            <button className="btn text-white border-[1px] border-[#A57F98]">
              <a href={Resume} download="Resume" className="">
                Download my CV
              </a>
            </button>
          </div>
        </div>
        <Connect />
      </section>
    </>
  );
};

export default transitions(About);
