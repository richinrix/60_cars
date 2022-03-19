import React, { useEffect, useState, useRef, Children } from "react";
import $ from "jquery";
// icons
import { AiFillHome } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdInfo } from "react-icons/md";
// import { getCategories } from '../services';
const categories = [
  {
    name: "About",
    slug: "about",
  },
  {
    name: "Contact Us",
    slug: "#contact",
  },
  {
    name: "Our Services",
    slug: "#our-services",
  },
  {
    name: "Key Features",
    slug: "#key-features",
  },
  {
    name: "Our Fleet",
    slug: "#our-fleet",
  },
  {
    name: "Home",
    slug: "#",
  },
];
const mobNavOptions = [
  {
    name: "Home",
    origin: "Home",
    slug: "#",
    icon: <AiFillHome />,
  },
  {
    name: "Fleet",
    origin: "Our Fleet",
    slug: "#our-fleet",
    icon: <AiOutlineCar />,
  },
  {
    name: "Services",
    origin: "Our Services",
    slug: "#our-services",
    icon: <MdOutlineFeaturedPlayList />,
  },
  {
    name: "Contact",
    origin: "Contact Us",
    slug: "#contact",
    icon: <IoIosCall />,
  },
  {
    name: "About",
    origin: "About",
    slug: "about",
    icon: <MdInfo />,
  },
];
const Nav = (props) => {
  // const [activeSection, setActiveSection] = useState(props.current);
  const activeSection = props.current;

  // Functions for mobile navbar slider button
  const handleToggle = () => {
    $("#sideMenu").toggleClass("translate-x-full");
    $("#sideButton").toggleClass("active");
  };
  const resize = () => {
    $("#sideMenu").addClass("translate-x-full");
    // handleToggle();
  };

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
                activeSection.toLowerCase() === category.name.toLowerCase()
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
                {category.icon}
              </div>
              <span
                className={` mx-1
               
              ${
                activeSection.toLowerCase() === category.name.toLowerCase()
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
