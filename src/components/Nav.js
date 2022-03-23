import React from "react";
// icons
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { AiOutlineCar, AiFillCar } from "react-icons/ai";
import { MdOutlineFeaturedPlayList, MdFeaturedPlayList } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import {
  BsBookmark,
  BsTelephone,
  BsTelephoneFill,
  BsBookmarkFill,
} from "react-icons/bs";
import {
  IoIosInformationCircleOutline,
  IoMdInformationCircle,
} from "react-icons/io";
import { RiFunctionFill, RiFunctionLine } from "react-icons/ri";
const categories = [
  {
    name: "About",
    slug: "about",
    origin: "about",
  },
  {
    name: "Contact Us",
    origin: "contact",
    slug: "#contact",
  },
  {
    name: "Our Services",
    origin: "our-services",
    slug: "#our-services",
  },
  {
    name: "Key Features",
    origin: "key-features",
    slug: "#key-features",
  },
  {
    name: "Our Fleet",
    origin: "our-fleet",
    slug: "#our-fleet",
  },
  {
    name: "Home",
    origin: "home",
    slug: "#",
  },
];
const mobNavOptions = [
  {
    name: "Home",
    origin: "home",
    slug: "#",
    icon1: <AiOutlineHome />,
    icon2: <AiFillHome />,
  },
  {
    name: "Fleet",
    origin: "our-fleet",
    slug: "#our-fleet",
    icon1: <AiOutlineCar />,
    icon2: <AiFillCar />,
  },
  {
    name: "Features",
    origin: "key-features",
    slug: "#key-features",
    icon1: <RiFunctionLine />,
    icon2: <RiFunctionFill />,
  },
  {
    name: "Services",
    origin: "our-services",
    slug: "#our-services",
    icon1: <MdOutlineFeaturedPlayList />,
    icon2: <MdFeaturedPlayList />,
  },
  {
    name: "Contact",
    origin: "contact",
    slug: "#contact",
    icon1: <BsTelephone />,
    icon2: <BsTelephoneFill />,
  },
  {
    name: "About",
    origin: "About",
    slug: "about",
    icon1: <IoIosInformationCircleOutline />,
    icon2: <IoMdInformationCircle />,
  },
];
const Nav = (props) => {
  const activeSection = props.current;

  return (
    <div className="    lg:px-20 mx-auto   ">
      <div className=" hidden lg:inline-block w-full  py-3">
        <div className="block md:float-left">
          <a href="/">
            <span className="cursor-pointer text-4xl font-bold text-black font-leagueSpartan">
              60 Cars
            </span>
          </a>
        </div>
        {/* desktop nav */}
        <div className="hidden md:float-right md:contents ">
          {categories.map((category, index) => (
            <a href={`/${category.slug}`} key={index}>
              <span
                className={`
              mt-2 ml-7 px-1  cursor-pointer font-semibold md:float-right 
              ${
                activeSection.toLowerCase() === category.origin.toLowerCase()
                  ? " text-red-500"
                  : " text-gray-700"
              }
              `}
              >
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      {/* mobile nav */}
      <div className="  lg:hidden flex items-center  w-screen  p-3">
        <div className=" text-xs w-full flex justify-between ">
          {mobNavOptions.map((category, index) => (
            <a
              className="flex flex-col items-center"
              href={`/${category.slug}`}
              key={index}
            >
              <div
                className={`text-2xl my-1
                  
              ${
                activeSection.toLowerCase() === category.origin.toLowerCase()
                  ? " text-brandRed"
                  : " text-gray-700 "
              }
                `}
              >
                {activeSection.toLowerCase() == category.origin.toLowerCase()
                  ? category.icon2
                  : category.icon1}
              </div>
              <span
                className={` mx-1
               
              ${
                activeSection.toLowerCase() === category.origin.toLowerCase()
                  ? " text-black font-bold"
                  : " text-gray-700 "
              }
              `}
              >
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
