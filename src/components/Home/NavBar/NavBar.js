import React from "react";
import Logo from "../../../Assets/Logo.png";
import Ellipse1 from "../../../Assets/Ellipse1.png";
import Ellipse2 from "../../../Assets/Ellipse2.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <section className="h-[8rem] bg-[#040013] fixed w-full left-0 top-0 z-50">
      <nav className="max-w-[75rem] mx-auto sm:flex sm:justify-between py-[4.45rem] ">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <img
            src={Logo}
            alt=""
            className="object-cover cursor-pointer w-[8.375rem] h-[2.82369rem] -mt-[1.01rem] z-10"
          />
        </Link>
        <ul className="text-white flex space-x-[2.56rem] z-50">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <li className="active:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
              Home
            </li>
          </Link>

          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            <li className="active:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
              About
            </li>
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            <li className="active:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
              Contacts
            </li>
          </Link>
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
