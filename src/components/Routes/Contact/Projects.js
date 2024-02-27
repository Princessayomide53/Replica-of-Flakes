import React from "react";
import Spotlight from "../../../Assets/Spotlight.png";
import Card from "../../UI/Card";
import { IoIosArrowForward } from "react-icons/io";
import Ellipsep from "../../../Assets/Ellipsep.png";
import NavBar from "../../Home/NavBar/NavBar";

const Projects = (props) => {
  console.log(props.items, "items");
  return (
    <>
      <NavBar />
      <section className="bg-[#040013] h-[190rem] md:h-[155rem] lg:h-[185rem]">
        <div className="lg:w-[60rem] h-[4.5625rem] md:h-[10.0625rem]  md:pt-[7.75rem] bg-[#040013]  mx-auto">
          {/* <div className="w-[40rem] h-12  shadow-xl shadow-[#C979CF]/50 "> */}
          <img
            src={Spotlight}
            alt=""
            className="object-cover mt-[3.5rem] md:mt-[5.19rem]"
          />
          {/* </div> */}
        </div>
        <p
          id="projects"
          className="text-center pb-[3rem] md:pb-[6.01rem] lg:pb-[9.01rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] md:mt-28 font-medium leading-normal text-white/80"
        >
          Featured Projects
        </p>
        <div className="md:max-w-[45rem] max-w-[21.5rem] lg:max-w-[60rem] xl:max-w-[75rem] mx-auto grid grid-cols-1 gap-[2.5rem] md:grid-cols-2 place-items-center md:gap-[2.5rem] lg:gap-[3.63rem] xl:gap-[6.62rem] md:pb-[4.37rem] lg:pb-[6.37rem]">
          {props.items?.map((item, index) => (
            <Card
              className="w-[20.4625rem] h-[27.25rem] md:h-[36.5875rem] md:w-[20.1875rem] lg:w-[28.1875rem] xl:w-[34.1875rem] lg:h-[43.9875rem] xl:h-[45.5875rem] card "
              key={item.id}
            >
              <a href={item.Link} target="_blank" rel="noopener noreferrer">
                <div>
                  <img src={Ellipsep} alt="" className="project object-cover" />
                </div>

                <div className="-mt-[250px]  lg:-mt-[310px]">
                  <div className="flex justify-between pt-[3.37rem] pb-[3.73rem] px-4 md:px-5 lg:px-10">
                    <p className="text-white text-[0.58744rem] md:text-base lg:text-[1.125rem] font-medium">
                      {item.design}
                    </p>
                    <p className="text-white capitalize text-[0.58744rem] md:text-base lg:text-[1.125rem] font-medium">
                      {item.type}
                    </p>
                  </div>
                  <div className="flex justify-between -mt-2 md:-mt-0 px-5 md:px-5 lg:px-10">
                    <h2 className="text-white text text-[0.78325rem] md:text-lg lg:text-[1.5rem] font-semibold">
                      {item.name}
                    </h2>
                    <a
                      href={item.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="lg:p-3 p-2 md:p-2 border-2 border-white rounded-full -mt-4">
                        <IoIosArrowForward className="text-white text-base md:text-2xl lg:text-4xl " />
                      </div>
                    </a>
                  </div>
                  <p className="text-white px-5 text-xs py-[1.62rem] md:py-[3.62rem] leading-[1.4rem] md:text-base font-medium md:px-5 lg:px-10">
                    {item.text}
                  </p>
                  <div className="px-5 flex justify-center">
                    <img
                      src={item.img}
                      alt=""
                      className={`object-contain ${
                        index === props.items.length - 1
                          ? "xl:w-[35.78844rem]"
                          : ""
                      } ${
                        index === props.items.length - 1
                          ? "lg:w-[30.78844rem]"
                          : ""
                      } ${
                        index === props.items.length - 1
                          ? "lg:h-[20.78844rem]"
                          : ""
                      }
                  ${
                    index === props.items.length - 1 ? "md:h-[13.78844rem]" : ""
                  } ${index === props.items.length - 1 ? "h-[10.78844rem]" : ""}
                   ${
                     index === props.items.length - 1
                       ? "xl:h-[23.13969rem]"
                       : ""
                   } ${
                        index === props.items.length - 2
                          ? "xl:w-[45.78844rem]"
                          : ""
                      } ${
                        index === props.items.length - 2
                          ? "xl:h-[19.13969rem]"
                          : ""
                      } ${
                        index === props.items.length - 2
                          ? "lg:h-[17.13969rem]"
                          : ""
                      } ${
                        index === props.items.length - 2
                          ? "md:h-[10.28844rem]"
                          : ""
                      } ${
                        index === props.items.length - 2 ? "h-[8.98844rem]" : ""
                      }
                  
                   ${
                     index === props.items.length - 3 ? "lg:w-[46.091rem]" : ""
                   } ${
                        index === props.items.length - 3
                          ? "lg:h-[31.75rem]"
                          : ""
                      } ${
                        index === props.items.length - 3
                          ? "lg:-mt-[5.5rem]"
                          : ""
                      } ${
                        index === props.items.length - 3
                          ? "md:h-[9.28844rem]"
                          : ""
                      } ${
                        index === props.items.length - 3 ? "h-[8.98844rem]" : ""
                      } 
                 
                   ${
                     index === props.items.length - 4 ? "xl:w-[45.091rem]" : ""
                   } ${
                        index === props.items.length - 4
                          ? "xl:h-[20.32rem]"
                          : ""
                      } ${
                        index === props.items.length - 4
                          ? "lg:h-[16.78844rem]"
                          : ""
                      } ${
                        index === props.items.length - 4
                          ? "md:h-[12.78844rem]"
                          : ""
                      } ${
                        index === props.items.length - 4
                          ? "h-[10.58844rem]"
                          : ""
                      }



                  ${
                    index === props.items.length - 5 ? "xl:h-[20.78844rem]" : ""
                  }
                  ${index === props.items.length - 5 ? "xl:w-[43.091rem]" : ""} 
                  ${
                    index === props.items.length - 5 ? "lg:h-[20.78844rem]" : ""
                  }
                  ${index === props.items.length - 5 ? "md:h-[9.28844rem]" : ""}
                  ${index === props.items.length - 5 ? "h-[9.18844rem]" : ""}



                  ${
                    index === props.items.length - 6 ? "xl:h-[20.78844rem]" : ""
                  }
                  ${index === props.items.length - 6 ? "xl:w-[43.091rem]" : ""} 
                  ${
                    index === props.items.length - 6 ? "lg:h-[20.78844rem]" : ""
                  }
                  ${
                    index === props.items.length - 6 ? "md:h-[14.48844rem]" : ""
                  }
                  ${index === props.items.length - 6 ? "h-[11.18844rem]" : ""}
                  `}
                    />
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
