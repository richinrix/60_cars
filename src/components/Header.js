import React from "react";
import { Nav, HeaderAnnouncement } from "../components/";
const Header = () => {
  return (
    <div>
      <div className="  z-10 lg:hidden">
        <HeaderAnnouncement />
      </div>
      <div className="py-4 font-extrabold bg-gray-400 text-4xl w-screen flex lg:hidden justify-center items-center ">
        60 Cars
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <div className="hidden lg:block">
          <HeaderAnnouncement />
        </div>
        <div className=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="home" />
        </div>
      </div>
    </div>
  );
};

export default Header;
