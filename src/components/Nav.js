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
    slug: "#",
    icon: <AiFillHome />,
  },
  {
    name: "Fleet",
    slug: "#our-fleet",
    icon: <AiOutlineCar />,
  },
  {
    name: "Services",
    slug: "#our-services",
    icon: <MdOutlineFeaturedPlayList />,
  },
  {
    name: "Contact",
    slug: "#contact",
    icon: <IoIosCall />,
  },
  {
    name: "About",
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
                  ? " text-black"
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
      {/* Mobile Nav */}
      <div className=" hidden  text-white bg-black  overflow-hidden px-5 z-50 w-full justify-between items-center h-auto">
        <a href="/" className="ml-2">
          <div class="h-10 w-10 bg-white"></div>
          {/* <img src={LOGO} alt="Mirius Logo" width="160px" /> */}
        </a>
        <nav
          id="sideMenu"
          className="text-xl sideMenu  fixed py-32 text-center bg-black  inset-y-0 right-0 transform transition items-center translate-x-full duration-500 ease-in-out uppercase min-h-screen w-full flex z-10 flex-col justify-around min-w-screen"
        >
          {mobNavOptions.map((category, index) => (
            <div
              key={index}
              className="block w-full text-center"
              onClick={() => {
                resize();
                // handleToggle();
              }}
              // onClick={handleToggle} // close navbar
            >
              <a onClick={handleToggle} href={`/${category.slug}`}>
                {category.name}
              </a>
            </div>
          ))}
        </nav>
        <button onClick={handleToggle} className="z-50 flex " id="sideButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 200 200"
          >
            <g stroke-width="6.5" stroke-linecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#00100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#ffffff"
              />
              <path
                d="M72 125.143h28.75"
                fill="#ffffff"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#fff"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#ff0"
                fill-rule="evenodd"
                stroke="#fff"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="  lg:hidden flex items-center  w-screen  p-3">
        <div className=" text-xs w-full flex justify-between ">
          {mobNavOptions.map((category, index) => (
            <a
              className="flex flex-col items-center"
              href={`/${category.slug}`}
              key={index}
            >
              <div className="text-2xl my-1">{category.icon}</div>
              <span
                className={` mx-1
               
              ${
                activeSection === category.slug
                  ? " text-black"
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
