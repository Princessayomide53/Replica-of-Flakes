import React from "react";
import Card from "../../UI/Card";
import { IoIosArrowForward } from "react-icons/io";
import Ellipsep from "../../../Assets/Ellipsep.png";

const Main = (props) => {
  console.log("items", props.item);
  return (
    <section className="bg-[#040013]  ">
      <div className="md:max-w-[45rem] max-w-[21.5rem] lg:max-w-[60rem] xl:max-w-[75rem] mx-auto grid grid-cols-1 gap-[2rem] md:grid-cols-2 place-items-center md:gap-[2.5rem] lg:gap-[3.63rem] xl:gap-[6.62rem] pb-[10.37rem]">
        {props.item?.map((items, index) => (
          <Card
            className="md:h-[37.9875rem] md:w-[20.1875rem] lg:w-[28.1875rem] xl:w-[34.1875rem] lg:h-[43.9875rem] xl:h-[45.5875rem] card "
            key={items.id}
          >
            <div>
              <img src={Ellipsep} alt="" className="project object-cover" />
            </div>

            <div className="md:-mt-[250px] lg:-mt-[310px]">
              <div className="flex justify-between pt-[3.37rem] pb-[3.73rem] md:px-5 lg:px-10">
                <p className="text-white md:text-base lg:text-[1.125rem] font-medium">
                  {items.design}
                </p>
                <p className="text-white capitalize md:text-base lg:text-[1.125rem] font-medium">
                  {items.type}
                </p>
              </div>
              <div className="flex justify-between md:px-5 lg:px-10">
                <h2 className="text-white text md:text-lg lg:text-[1.5rem] font-semibold">
                  {items.name}
                </h2>
                <div className="lg:p-3 md:p-2 border-2 border-white rounded-full -mt-4">
                  <IoIosArrowForward className="text-white md:text-2xl lg:text-4xl " />
                </div>
              </div>
              <p className="text-white py-[3.62rem] leading-[1.4rem] text-base font-medium md:px-5 lg:px-10">
                {items.text}
              </p>
              <div className="px-5 flex justify-center">
                <img
                  src={items.img}
                  alt=""
                  className={`object-contain ${
                    index === props.item.length - 1 ? "xl:w-[35.78844rem]" : ""
                  } ${
                    index === props.item.length - 1 ? "lg:w-[30.78844rem]" : ""
                  } ${
                    index === props.item.length - 1 ? "lg:h-[20.78844rem]" : ""
                  }
                  ${index === props.item.length - 1 ? "md:h-[17.78844rem]" : ""}
                   ${
                     index === props.item.length - 1 ? "xl:h-[23.13969rem]" : ""
                   } ${
                    index === props.item.length - 2 ? "xl:w-[45.78844rem]" : ""
                  } ${
                    index === props.item.length - 2 ? "xl:h-[19.13969rem]" : ""
                  } ${
                    index === props.item.length - 2 ? "lg:h-[17.13969rem]" : ""
                  } ${
                    index === props.item.length - 2 ? "md:h-[10.98844rem]" : ""
                  }
                  
                   ${
                     index === props.item.length - 3 ? "lg::w-[46.091rem]" : ""
                   } ${
                    index === props.item.length - 3 ? "lg:h-[31.75rem]" : ""
                  } ${
                    index === props.item.length - 3 ? "lg:-mt-[5.5rem]" : ""
                  } ${
                    index === props.item.length - 3 ? "md:h-[18.78844rem]" : ""
                  } 
                 
                   ${
                     index === props.item.length - 4 ? "xl:w-[45.091rem]" : ""
                   } ${
                    index === props.item.length - 4 ? "xl:h-[20.32rem]" : ""
                  } ${
                    index === props.item.length - 4 ? "lg:h-[16.78844rem]" : ""
                  } ${
                    index === props.item.length - 4 ? "md:h-[10.78844rem]" : ""
                  }
                  `}
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
