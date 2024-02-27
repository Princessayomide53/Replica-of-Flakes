import React, { useState } from "react";
import Logo from "../../../Assets/Logo.png";
import Ellipse1 from "../../../Assets/Ellipse1.png";
import Ellipse2 from "../../../Assets/Ellipse2.png";
import { Link, useLocation } from "react-router-dom";
import { HashLink as HashRouterLink } from "react-router-hash-link";
import menu from "../../../Assets/menu.svg";
import { FaBehance } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

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
      <nav className="md:max-w-[43rem] lg:max-w-[60rem] xl:max-w-[75rem] py-5 mx-auto sm:flex sm:justify-between md:py-[4.45rem] ">
        <div className="block md:hidden relative">
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
          {nav ? (
            <>
              <div
                onClick={handleClose}
                className="fixed inset-0 bg-black opacity-50 z-40"
              ></div>

              <ul
                className={`bg-[#040013] ${nav ? "slide-in" : "slide-out"}
                 dropdown  w-[70%] px-[2.35rem] py-[1.5rem] h-[30.3125rem] flex flex-col  absolute right-0 -top-5 z-50`}
              >
                <div onClick={handleClose} className="flex justify-end">
                  <AiOutlineClose className="text-2xl text-white" />
                </div>
                <div className="flex flex-col justify-center items-start pb-[2.91rem] space-y-[3.12rem] mt-auto">
                  <Link
                    to="/"
                    activeClassName="active"
                    className={
                      location.pathname === "/" ? "active" : "text-white"
                    }
                  >
                    <li className="  text-sm font-normal leading-[1rem] tracking-[0.00563rem]">
                      Home
                    </li>
                  </Link>

                  <Link
                    to="/about"
                    className={
                      location.pathname === "/about" ? "active" : "text-white"
                    }
                  >
                    <li className="text-sm font-normal leading-[1rem] tracking-[0.00563rem]">
                      About
                    </li>
                  </Link>

                  <Link
                    to="/projects"
                    className={
                      location.pathname === "/projects"
                        ? "active"
                        : "text-white"
                    }
                  >
                    <li className="text-sm font-normal leading-[1rem] tracking-[0.00563rem]">
                      Projects
                    </li>
                  </Link>
                  <Link
                    to="/contact"
                    className={
                      location.pathname === "/contact" ? "active" : "text-white"
                    }
                  >
                    <li className="text-sm font-normal leading-[1rem] tracking-[0.00563rem]">
                      Contacts
                    </li>
                  </Link>
                  <div className="flex space-x-5 mt-10">
                    <a
                      href="https://www.behance.net/folakeflorence"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBehance className="text-[#C979CF] text-[1.09488rem] md:text-[42px]" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ogunnaikefolake?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SlSocialLinkedin className="text-[#C979CF] text-[1.09488rem;] md:text-4xl" />
                    </a>
                    <a
                      href="https://dribbble.com/FlakesUX"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDribbble className="text-[#C979CF] text-[1.09488rem] md:text-4xl" />
                    </a>
                    <a
                      href="https://x.com/Flakes_UX?t=7JVUlN9Mb7Goo2GAvHQXPg&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="text-[#C979CF] text-[1.09488rem] md:text-4xl" />
                    </a>
                  </div>
                </div>
              </ul>
            </>
          ) : null}
        </div>
        <ul className="text-white hidden md:flex space-x-[2.56rem] z-50">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
        </ul>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <img
            src={Logo}
            alt=""
            className="object-cover cursor-pointer w-[8.375rem] hidden md:flex h-[2.82369rem] -mt-[1.01rem] z-10"
          />
        </Link>
        <ul className="text-white hidden md:flex space-x-[2.56rem] z-50">
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:-top-[3rem] top-[1rem] -z-10 md:z-0 absolute left-1">
        <img src={Ellipse2} alt="" className="Ellipse rounded-lg" />
      </div>
      <div className="md:-top-[4rem] top-[1rem] -z-10 md:z-0 absolute right-2">
        <img src={Ellipse1} alt="" className="Ellipse rounded-lg" />
      </div>
    </section>
  );
};

export default NavBar;
