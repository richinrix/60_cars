import React, { useEffect } from "react";
// icons
import {
  Ri24HoursFill,
  RiSecurePaymentLine,
  RiCustomerService2Fill,
} from "react-icons/ri";
import { HiLightningBolt } from "react-icons/hi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FcInspection } from "react-icons/fc";
import { IoIosTime } from "react-icons/io";
import { MdCleanHands } from "react-icons/md";
// aos animation
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    id: 1,
    title: "Experienced Chauffeurs",
    description: "EXPERIENCED CHAUFFEURS .",
    icon: <BsFillPersonCheckFill />,
  },
  {
    id: 6,
    title: "Premium Services",
    icon: <HiLightningBolt />,
  },
  {
    id: 2,
    title: "24/7 Online service and support",
    description: "24/7 Online Service and Support.",
    icon: <RiCustomerService2Fill />,
  },
  {
    id: 3,
    title: "Close monitoring of duties",
    description: "Close Monitoring of Duties.",
    icon: <FcInspection />,
  },
  {
    id: 4,
    title: "Safe driving and punctuality",
    description: "Absolute confidentiality.",
    icon: <IoIosTime />,
  },
  {
    id: 5,
    title: "Confidential and hygienic cars",
    icon: <MdCleanHands />,
  },
];
const Features = () => {
  const isPhone = window.innerWidth < 700;
  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      id="key-features"
      className="px-3 lg:px-0 w-full lg:container mx-auto flex flex-col lg:min-h-screen  justify-center pt-8 lg:pt-0 "
    >
      <div className="font-montserrat text-4xl lg:text-6xl font-bold w-full text-left">
        Key Features
      </div>
      <div className="text-sm lg:text-xl text-left w-full my-3 lg:my-8 lg:w-3/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        pariatur neque fugiat praesentium optio commodi tempora odit inventore
        consequuntur veniam.
      </div>
      <div className="flex  lg:flex-row lg:items-center flex-wrap justify-between w-full lg:h-full lg:mt-3 ">
        {features.map((feature, index) => {
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

export default Features;
