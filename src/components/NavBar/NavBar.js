import React from "react";
import Logo from "../../Assets/Logo.png";
import Ellipse1 from "../../Assets/Ellipse1.png";
import Ellipse2 from "../../Assets/Ellipse2.png";

const NavBar = () => {
  return (
    <section className="h-full bg-[#040013] relative z-50">
      <nav className="max-w-[80rem] mx-auto flex justify-between py-[4.45rem] ">
        <ul className="text-white flex space-x-[2.56rem] z-50">
          <li className="hover:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
            Home
          </li>
          <li className="hover:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
            Projects
          </li>
        </ul>
        <img
          src={Logo}
          alt=""
          className="object-cover w-[8.375rem] h-[2.82369rem] -mt-[1.01rem]"
        />
        <ul className="text-white flex space-x-[2.56rem] z-50">
          <li className="hover:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
            About
          </li>
          <li className="hover:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
            Contacts
          </li>
        </ul>
      </nav>{" "}
      <div className="-top-[3rem] absolute  left-1">
        <img src={Ellipse2} alt="" className="Ellipse rounded-lg" />
      </div>
      <div className="-top-[4rem] absolute right-2">
        <img src={Ellipse1} alt="" className="Ellipse rounded-lg" />
      </div>
    </section>
  );
};

export default NavBar;
