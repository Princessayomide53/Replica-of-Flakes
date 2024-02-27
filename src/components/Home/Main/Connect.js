import React from "react";
import { FaBehance } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Connect = () => {
  return (
    <section className="bg-[#040013] lg:py-[3.75rem] xl:py-[4.75rem]">
      <div className="flex flex-col items-center justify-center">
        <h4 className="design text-[1.125rem] md:text-[2rem] lg:text-[2.5rem] font-medium leading-normal">
          Want to create design magic?
        </h4>
        <button className="btn text-white border-[1px] border-[#A57F98] text-base mt-5">
          Get in touch
        </button>
        <div className="flex space-x-5 mt-8">
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
    </section>
  );
};

export default Connect;
