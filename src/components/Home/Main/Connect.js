import React from "react";
import { FaBehance } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Connect = () => {
  return (
    <section className="bg-[#040013] py-[4.75rem]">
      <div className="flex flex-col items-center justify-center">
        <h4 className="design text-[2.5rem] font-medium leading-normal">
          Want to create design magic?
        </h4>
        <button className="btn text-white border-[1px] border-[#A57F98] text-base mt-5">
          Get in touch
        </button>
        <div className="flex space-x-5 mt-8">
          <FaBehance className="text-[#C979CF] text-[42px]" />
          <SlSocialLinkedin className="text-[#C979CF] text-4xl" />
          <FaDribbble className="text-[#C979CF] text-4xl" />
          <FaXTwitter className="text-[#C979CF] text-4xl" />
        </div>
      </div>
    </section>
  );
};

export default Connect;
