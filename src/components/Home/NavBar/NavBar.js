import React, { useState } from "react";
import Logo from "../../../Assets/Logo.png";
import Ellipse1 from "../../../Assets/Ellipse1.png";
import Ellipse2 from "../../../Assets/Ellipse2.png";
import { Link, useLocation } from "react-router-dom";
import menu from "../../../Assets/menu.svg";
const NavBar = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(true);
  };
  const handleClose = () => {
    setNav(false);
  };

  return (
    <section className="h-[5rem] md:h-[8rem] bg-[#040013] fixed w-full left-0 top-0 z-20">
      <nav className="md:max-w-[43rem]  lg:max-w-[60rem] xl:max-w-[75rem] py-5 mx-auto sm:flex sm:justify-between md:py-[4.45rem] ">
        <div className="md:hidden  relative">
          <div className="flex justify-between mx-auto max-w-[21.5rem]">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <img
                src={Logo}
                alt=""
                className="object-cover cursor-pointer w-[4.375rem] flex md:hidden h-[1.52369rem] mt-[0.85rem] z-10"
              />
            </Link>
            <div onClick={handleClick}>
              <img src={menu} alt="" />{" "}
            </div>
          </div>
          {nav && (
            <ul className="bg-[#040013] h-screen dropdown w-full flex flex-col space-y-[2.56rem] absolute left-0 -top-3 z-50">
              <div onClick={handleClose} className="text-white">
                x
              </div>
              <li className="active:text-[#C979CF] text-white text-sm font-normal leading-[1rem] tracking-[0.00563rem]">
                Home
              </li>
              <li className="active:text-[#C979CF] text-white text-sm font-normal leading-[1rem] tracking-[0.00563rem]">
                About
              </li>
              <li className="active:text-[#C979CF] text-white text-sm font-normal leading-[1rem] tracking-[0.00563rem]">
                Projects
              </li>
              <li className="active:text-[#C979CF] text-white text-sm font-normal leading-[1rem] tracking-[0.00563rem]">
                Contacts
              </li>
            </ul>
          )}{" "}
        </div>
        <ul className="text-white hidden md:flex space-x-[2.56rem] z-50">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <li className="active:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
              Home
            </li>
          </Link>

          <Link
            to=""
            className={location.pathname === "/about" ? "active" : ""}
          >
            <li className="active:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
              Projects
            </li>
          </Link>
        </ul>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <img
            src={Logo}
            alt=""
            className="object-cover cursor-pointer w-[8.375rem] hidden md:flex h-[2.82369rem] -mt-[1.01rem] z-10"
          />
        </Link>
        <ul className="text-white hidden md:flex space-x-[2.56rem] z-50">
          {/* <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <li className="active:text-[#C979CF] text-[1.125rem] font-normal leading-[1rem] tracking-[0.00563rem]">
              Home
            </li>
          </Link> */}

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
      <div className="md:-top-[3rem] top-[1rem] -z-10 md:z-0 absolute  left-1">
        <img src={Ellipse2} alt="" className="Ellipse rounded-lg" />
      </div>
      <div className="md:-top-[4rem] top-[1rem] -z-10 md:z-0 absolute right-2">
        <img src={Ellipse1} alt="" className="Ellipse rounded-lg" />
      </div>
    </section>
  );
};

export default NavBar;
