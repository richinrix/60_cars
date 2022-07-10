import React from "react";
import { Nav } from "../components/";

const Corporate = () => {
  return (
    <div>
      {/* nav */}
      <div className="fixed z-50 lg:hidden">
        <div className="   lg:hidden ">{/* <HeaderAnnouncement /> */}</div>
        <div className="  py-2 font-leagueSpartan  font-extrabold bg-white bg-opacity-30 backdrop-blur-md   text-4xl w-screen flex lg:hidden justify-center items-center ">
          60 Cars
        </div>
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <div className="hidden lg:block">{/* <HeaderAnnouncement /> */}</div>

        <div className=" mx-auto lg:bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="" />
        </div>
      </div>
      {/* end nav */}

      <div className="lg:px-0 mx-auto  ">
        <div
          class="w-full h-full bg-red-100 absolute lg:fixed lg:top-0 brightness-75 lg:brightness-50 bg-right lg:bg-bottom bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(/images/contact/contact_bg3.jpg)`,
          }}
        />
        <div className="px-3 lg:px-0 lg:container mx-auto w-full  relative pt-28 lg:py-10 text-white">
          <div className="text-2xl lg:text-6xl font-bold font-leagueSpartan text-center">
            Corporate Travel Management
          </div>
          <div className="w-full flex justify-center my-4 text-sm lg:text-base leadin text-justify lg:text-center">
            <div className="w-full lg:w-2/3">
              Let 60 Cars take care of your enterprise travel. The future of
              corporate travel lies in simplicity and convenience. You are one
              tap away from trying it out.
            </div>
          </div>
          <div className="lg:py-10 flex lg:flex-row flex-col items-center justify-center">
            <a
              href="/contact/company"
              className="backdrop-blur-sm  bg-black bg-opacity-50 text-white px-3 py-2 my-4 lg:mx-10 rounded-md text-xl lg:text-2xl"
            >
              Sign Up For your company
            </a>
            <a
              href="/contact/general"
              className="backdrop-blur-sm  bg-black bg-opacity-50 text-white px-3 py-2 my-4 lg:mx-10 rounded-md text-xl lg:text-2xl"
            >
              Contact Us For More Information
            </a>
          </div>
        </div>
      </div>
      {/* end of section */}
    </div>
  );
};

export default Corporate;
