import React, { useEffect } from "react";

// icons
import { VscPerson } from "react-icons/vsc";
import { MdLocalAirport } from "react-icons/md";
import { AiTwotoneCar } from "react-icons/ai";
import { SiGumroad } from "react-icons/si";
import { GiHorizonRoad } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";

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
    title: "PAN India and seamless booking",
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
const Services = (props) => {
  const isPhone = window.innerWidth < 700;

  return (
    <div
      id="our-services"
      className="px-3 w-full lg:px-20 mx-auto flex flex-col lg:min-h-screen overflow-y-clip justify-center pt-20 lg:pt-0 "
    >
      <div className=" font-leagueSpartan text-4xl lg:text-6xl font-bold w-full text-left">
        Our Services
      </div>
      <div className="text-sm lg:text-xl text-left w-full my-3 lg:my-8 lg:w-9/10">
        Our qualified and reliable team offers you great tours & travel
        experiences as well as solving all your questions in your preferred
        language such As english, kannada, hindi, tamil, telugu. We have wide
        range of effective solutions with years of experience and great skills
        to perform the movement smoothly with maximum safety done with the help
        of our especially assigned client executive. Our customer executives are
        trained as well as experienced to give disposable and break up travels
        quotation for all kind of vehicles at the spot. Monday – Sunday ( 24/7 )
      </div>
      <div className="flex  lg:flex-row lg:items-center flex-wrap justify-between w-full lg:h-full lg:mt-3 ">
        {services.map((feature, index) => {
          const cardAnimate = {
            easing: "linear",
            offset: "150",
            duration: index * 200,
          };
          return (
            <div
              key={index}
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
              <div className=" w-full bg-gray-900 text-white   p-4 lg:p-5 rounded-xl h-48 lg:h-64 flex flex-col justify-between lg:shadow-xl">
                <div
                  className={`" text-4xl p-2 rounded-full w-min bg-opacity-50 " ${
                    index % 2 != 0 ? "bg-blue-400" : "bg-red-400"
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
