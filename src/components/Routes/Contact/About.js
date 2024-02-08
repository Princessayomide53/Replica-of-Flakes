import React from "react";
import NavBar from "../../Home/NavBar/NavBar";
import G1 from "../../../Assets/G1.png";
import G2 from "../../../Assets/G2.png";
import G3 from "../../../Assets/G3.png";
import G4 from "../../../Assets/G4.png";

const About = () => {
  return (
    <section className="overflow-hidden bg-[#040013] h-[200.625rem]">
      <NavBar />
      <div className="pt-[12.75rem] ">
        <h2 className="text-white text-center text-[2.5rem] font-medium leading-[2rem] tracking-[0.0125rem]">
          Hi, my name is Folake Florence and I love things that move
        </h2>
        <div className="flex justify-center max-w-[73rem] mx-auto gap-[2rem] pt-[5rem]">
          <img
            src={G1}
            alt=""
            className="w-[40.12569rem] h-[39.375rem] object-cover"
          />
          <span className="flex flex-col gap-[2.5rem]">
            <img src={G2} alt="" />
            <img src={G3} alt="" />
          </span>
        </div>

        <p className="text-white/90  pt-[4.94rem] flex justify-center text-[1.25rem] font-medium leading-[2rem] tracking-[0.00625rem]">
          I started product design as way to establish a defined career path and
          discovered that designing was both fun,
          <br /> engaging and meaningful.
          <br />
          <br />
          What i fancy most about design is seeing my ideas materialize into
          solutions that actual users engage with. The
          <br /> entire process from conceptualization to user interaction
          fascinates me. I also love that i get to use my designs
          <br /> to create products that solve users problem and work on amazing
          projects that improve lives.{" "}
        </p>
        <div className="pt-[7.12rem] flex justify-evenly max-w-[70rem] mx-auto">
          <div>
            <h5 className="text-[1.9375rem] pt-[0.5rem] pb-[2rem] text-white font-medium leadng-[2rem] tracking-[0.00969rem]">
              Hobbies and Funfacts
            </h5>

            <p className="text-white text-[1.25rem] font-normal leading-[2rem]">
              I designed a web application for the Lagos State
              <br /> Residents Registration Agency (LASSRA) to help <br />
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
          </div>
          <img src={G4} alt="" />
        </div>
        <div className="pt-[8.28rem] flex justify-around max-w-[70rem] place-content-center mx-auto">
          <div>
            <h5 className="text-[1.9375rem] pt-[0.5rem] pb-[1rem] text-white font-medium leadng-[2rem] tracking-[0.00969rem]">
              <span className="skills -mt-1">Key</span> Skills
            </h5>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Virtual design
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Wireframing
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              UX design
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Typograpy
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Prototyping
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Interaction design
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Branding
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Art direction
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Responsive design
            </p>
          </div>
          <div>
            <h5 className="text-[1.9375rem] pt-[0.5rem] pb-[1rem] text-white font-medium leadng-[2rem] tracking-[0.00969rem]">
              <span className="skills -mt-1">Soft</span> Skills
            </h5>

            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Communication
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Collaboration
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Problem solving
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Attention to detail
            </p>
            <p className="text-white text-[1.25rem] font-normal leading-normal">
              Time management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
