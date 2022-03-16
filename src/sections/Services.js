import React, { useEffect } from "react";
// icons
import { VscPerson } from "react-icons/vsc";
import { MdLocalAirport } from "react-icons/md";
import { AiTwotoneCar } from "react-icons/ai";
import { SiGumroad } from "react-icons/si";
import { GiHorizonRoad } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    title: "Chauffeur drive",
    description: "Chauffeur drive.",
    icon: <VscPerson />,
  },
  {
    id: 2,
    title: "Airport transfers",
    description: "Airport Transfers.",
    icon: <MdLocalAirport />,
  },
  {
    id: 3,
    title: "Long term car hire",
    icon: <AiTwotoneCar />,
  },
  {
    id: 4,
    title: "Intercity travel",
    icon: <SiGumroad />,
  },
  {
    id: 5,
    title: "Outstations",
    icon: <GiHorizonRoad />,
  },
  {
    id: 6,
    title: "Event and conference",
    icon: <MdOutlineGroups />,
  },
];
const Services = () => {
  const isPhone = window.innerWidth < 700;
  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      id="our-services"
      className="px-3 lg:px-0 w-full lg:container mx-auto flex flex-col lg:min-h-screen  justify-center pt-8 lg:pt-0 "
    >
      <div className="font-montserrat text-4xl lg:text-6xl font-bold w-full text-left">
        Our Services
      </div>
      <div className="text-sm lg:text-xl text-left w-full my-3 lg:my-8 lg:w-3/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        pariatur neque fugiat praesentium optio commodi tempora odit inventore
        consequuntur veniam.
      </div>
      <div className="flex  lg:flex-row lg:items-center flex-wrap justify-between w-full lg:h-full lg:mt-3 ">
        {services.map((feature, index) => {
          const cardAnimate = {
            easing: "linear",
            offset: "150",
            duration: index * 400,
          };
          return (
            <div
              className={`" w-1/2 px-2 lg:w-1/6 lg:h-full flex  flex-col my-2 lg:pr-3  "
                ${index === 0 ? "lg:pr-3 " : "  lg:pr-3"}
            `}
              // data-aos-once
              data-aos="slide-up"
              // data-aos={!isPhone ? "slide-up" : ""}
              data-aos-easing={cardAnimate.linear}
              data-aos-offset={cardAnimate.offset}
              data-aos-duration={!isPhone ? cardAnimate.duration : 1000}
            >
              <div className="border-2 w-full border-gray-200 p-4 lg:p-5 rounded-xl h-48 lg:h-64 flex flex-col justify-between shadow-xl">
                <div
                  className={`" text-4xl p-2 rounded-full w-min bg-opacity-50 " ${
                    feature.id % 2 == 0 ? "bg-blue-200" : "bg-red-200"
                  } `}
                >
                  {feature.icon}
                </div>
                <div className=" w-full text-md lg:text-2xl font-bold leading-none lg:leading-none">
                  {feature.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
