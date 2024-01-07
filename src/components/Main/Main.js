import React from "react";
import Card from "../UI/Card";
import { IoIosArrowForward } from "react-icons/io";
import Ellipsep from "../../Assets/Ellipsep.png";

const Main = (props) => {
  console.log("items", props.item);
  return (
    <section className="bg-[#040013]  ">
      <div className="max-w-[75rem] mx-auto grid grid-cols-2 place-items-center gap-[6.62rem] pb-[13.37rem]">
        {props.item?.map((items, index) => (
          <Card className="w-[34.1875rem] h-[45.5875rem] card " key={items.id}>
            <div>
              <img src={Ellipsep} alt="" className="project object-cover" />
            </div>

            <div className="-mt-[310px]">
              <div className="flex justify-between pt-[3.37rem] pb-[3.73rem] px-10">
                <p className="text-white text-[1.125rem] font-medium">
                  {items.design}
                </p>
                <p className="text-white capitalize text-[1.125rem] font-medium">
                  {items.type}
                </p>
              </div>
              <div className="flex justify-between px-10">
                <h2 className="text-white text-[1.5rem] font-semibold">
                  {items.name}
                </h2>
                <div className="p-3 border-2 border-white rounded-full -mt-4">
                  <IoIosArrowForward className="text-white text-4xl " />
                </div>
              </div>
              <p className="text-white py-[3.62rem] leading-[1.4rem] text-base font-medium px-10">
                {items.text}
              </p>
              <div className="px-5">
                <img
                  src={items.img}
                  alt=""
                  className={`object-contain ${
                    index === props.item.length - 1 ? "w-[35.78844rem]" : ""
                  } ${
                    index === props.item.length - 1 ? "h-[23.13969rem]" : ""
                  } ${
                    index === props.item.length - 2 ? "w-[45.78844rem]" : ""
                  } ${
                    index === props.item.length - 2 ? "h-[19.13969rem]" : ""
                  } ${index === props.item.length - 3 ? "w-[46.091rem]" : ""} ${
                    index === props.item.length - 3 ? "h-[31.75rem]" : ""
                  } ${index === props.item.length - 3 ? "-mt-[5.5rem]" : ""}  ${
                    index === props.item.length - 4 ? "w-[45.091rem]" : ""
                  } ${index === props.item.length - 4 ? "h-[20.32rem]" : ""}`}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Main;
