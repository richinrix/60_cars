import React from "react";
import { Nav, HeaderAnnouncement } from "../components/";
const Header = () => {
  return (
    <div>
      <div class="  z-10 lg:hidden">
        <HeaderAnnouncement />
      </div>
      <div class="py-4 font-extrabold bg-gray-400 text-4xl w-screen flex lg:hidden justify-center items-center ">
        60 Cars
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <div class="hidden lg:block">
          <HeaderAnnouncement />
        </div>
        <div class=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="home" />
        </div>
      </div>
    </div>
  );
};

export default Header;
