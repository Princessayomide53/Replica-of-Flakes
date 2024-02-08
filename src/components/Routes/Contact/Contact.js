import React from "react";
import NavBar from "../../Home/NavBar/NavBar";
import Connect from "../../Home/Main/Connect";

const Contact = () => {
  return (
    <section className="overflow-hidden bg-[#040013] h-[95.625rem]">
      <NavBar />

      <div className="max-w-[83rem] mx-auto pt-[10.75rem]">
        <h2 className="text text-white/60 text-center text-[1.5rem]  font-normal leading-normal tracking-[0.015rem] pb-[2.5rem]">
          Contact me
        </h2>

        <p className="text-white/90 text-[1.25rem] font-medium text-center leading-[2rem] tracking-[0.00625rem]">
          Just to make things simple for you, I added this page so you can drop
          me an email
          <br /> directly. I usually respond unusually quickly so you’ll get a
          response for sure
        </p>
        <div className="pt-[5.75rem] pb-[10.75rem] w-[42.5rem] mx-auto">
          <form className="space-y-[2.5rem]">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="First Name"
                className="w-[42.5rem] pl-5 rounded-lg border-[1px] border-[#A57F98] h-[4.2rem] form  bg-[#040013]"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Last Name"
                className="w-[42.5rem] pl-5 rounded-lg border-[1px] border-[#A57F98]  h-[4.2rem]  border-opacity-70 bg-[#040013]"
              />
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Email"
                className="w-[42.5rem] pl-5 rounded-lg  h-[4.2rem] border-[1px] border-[#A57F98] bg-[#040013]"
              />
            </div>
            <div className="flex justify-center">
              <textarea
                placeholder="Message"
                className="w-[42.5rem] p-5 rounded-lg  h-[12.5rem] border-[1px] border-[#A57F98] bg-[#040013]"
              />
            </div>
            <div className="">
              <button className="btn uppercase  text-white border-[1px] border-[#A57F98]">
                Send
              </button>
            </div>
          </form>
        </div>
        <Connect />
      </div>
    </section>
  );
};

export default Contact;
