import React from "react";
import Card from "../../UI/Card";
import { IoIosArrowForward } from "react-icons/io";
import Ellipsep from "../../../Assets/Ellipsep.webp";
import { Link } from "react-router-dom";

const Main = (props) => {
  console.log("items", props.item);
  return (
    <>
      <section className="bg-[#040013] h-[126rem] md:h-full pt-10 lg:pt-20">
        <div className="md:max-w-[45rem] max-w-[21.5rem] lg:max-w-[60rem] xl:max-w-[75rem] mx-auto grid grid-cols-1 gap-[2.5rem] md:grid-cols-2 place-items-center md:gap-[2.5rem] lg:gap-[3.63rem] xl:gap-[6.62rem] md:pb-[4.37rem] lg:pb-[6.37rem]">
          {props.item?.slice(0, 4).map((items, index) => (
            <Card
              className="w-[20.4625rem] h-[27.25rem] md:h-[36.5875rem] md:w-[20.1875rem] lg:w-[28.1875rem] xl:w-[34.1875rem] lg:h-[43.9875rem] xl:h-[45.5875rem] card "
              key={items.id}
              style={
                index === props.item.length - 1 ? { display: "none" } : null
              }
              href={items.Link}
            >
              <div>
                <img
                  src={Ellipsep}
                  data-src="lazy-image.jpg"
                  alt="Lazy Loaded Image"
                  loading="lazy"
                  className="project object-cover Ellipse5 "
                />
              </div>

              <div className="-mt-[230px]  md:-mt-[400px]">
                <div className="flex justify-between pt-[4.37rem] lg:pt-[3.37rem] pb-[3.73rem] px-4 md:px-5 lg:px-10">
                  <p className="text-white text-[0.58744rem] md:text-base lg:text-[1.125rem] font-medium">
                    {items.design}
                  </p>
                  <p className="text-white capitalize text-[0.58744rem] md:text-base lg:text-[1.125rem] font-medium">
                    {items.type}
                  </p>
                </div>
                <div className="flex justify-between -mt-2 md:-mt-0 px-5 md:px-5 lg:px-10">
                  <h2 className="text-white text text-[0.78325rem] md:text-lg lg:text-[1.5rem] font-semibold">
                    {items.name}
                  </h2>
                  <a href={items.Link}>
                    <div className="lg:p-3 p-2 md:p-2 border-2 border-white rounded-full -mt-4">
                      <IoIosArrowForward className="text-white text-base md:text-2xl lg:text-4xl " />
                    </div>
                  </a>
                </div>
                <p className="text-white px-5 text-xs py-[1.62rem] md:py-[3.62rem] leading-[1.4rem] md:text-base font-normal md:px-5 lg:px-10">
                  {items.text}
                </p>
                <div className="px-5 flex justify-center">
                  <img
                    src={items.img}
                    data-src="lazy-image.jpg"
                    alt="Lazy Loaded Image"
                    loading="lazy"
                    className={`object-contain ${
                      index === props.item.length - 1
                        ? "xl:w-[35.78844rem]"
                        : ""
                    } ${
                      index === props.item.length - 1
                        ? "lg:w-[30.78844rem]"
                        : ""
                    } ${
                      index === props.item.length - 1
                        ? "lg:h-[20.78844rem]"
                        : ""
                    }
                ${
                  index === props.item.length - 1 ? "md:h-[13.78844rem]" : ""
                } ${index === props.item.length - 1 ? "h-[10.78844rem]" : ""}
                 ${
                   index === props.item.length - 1 ? "xl:h-[23.13969rem]" : ""
                 } ${
                      index === props.item.length - 2
                        ? "xl:w-[45.78844rem]"
                        : ""
                    } ${
                      index === props.item.length - 2
                        ? "xl:h-[19.13969rem]"
                        : ""
                    } ${
                      index === props.item.length - 2
                        ? "lg:h-[17.13969rem]"
                        : ""
                    } ${
                      index === props.item.length - 2
                        ? "md:h-[10.28844rem]"
                        : ""
                    } ${index === props.item.length - 2 ? "h-[8.98844rem]" : ""}
                
                    ${
                      index === props.item.length - 3
                        ? "xl:w-[24.28844rem]"
                        : ""
                    }
                 ${index === props.item.length - 3 ? "lg:w-[20.091rem]" : ""} ${
                      index === props.item.length - 3 ? "xl:-mt-0" : ""
                    }  ${
                      index === props.item.length - 3 ? "lg:h-[18.75rem]" : ""
                    } ${
                      index === props.item.length - 3 ? "lg:-mt-[1.5rem]" : ""
                    } ${
                      index === props.item.length - 3 ? "md:h-[9.28844rem]" : ""
                    } ${
                      index === props.item.length - 3 ? "h-[8.98844rem]" : ""
                    } 
               
                 ${index === props.item.length - 4 ? "xl:w-[45.091rem]" : ""} ${
                      index === props.item.length - 4 ? "xl:h-[20.32rem]" : ""
                    } ${
                      index === props.item.length - 4
                        ? "lg:h-[16.78844rem]"
                        : ""
                    } ${
                      index === props.item.length - 4
                        ? "md:h-[12.78844rem]"
                        : ""
                    } ${
                      index === props.item.length - 4 ? "h-[10.58844rem]" : ""
                    }



                ${index === props.item.length - 5 ? "xl:h-[18.78844rem]" : ""}
                ${index === props.item.length - 5 ? "xl:w-[43.091rem]" : ""} 
                ${index === props.item.length - 5 ? "lg:h-[15.78844rem]" : ""}
                ${index === props.item.length - 5 ? "md:h-[9.28844rem]" : ""}
                ${index === props.item.length - 5 ? "h-[9.18844rem]" : ""}



                ${index === props.item.length - 6 ? "xl:h-[20.78844rem]" : ""}
                ${index === props.item.length - 6 ? "xl:w-[43.091rem]" : ""} 
                ${index === props.item.length - 6 ? "lg:h-[20.78844rem]" : ""}
                ${index === props.item.length - 6 ? "md:h-[14.48844rem]" : ""}
                ${index === props.item.length - 6 ? "h-[11.18844rem]" : ""}
              
                  `}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center pt-[2.5rem] md:pt-0 pb-[3.2rem]">
          <Link to="/projects">
            <button className="btn text-white border-[1px] border-[#A57F98]">
              See more
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Main;
