import React from "react";
import { Nav } from "../components/";

const Corporate = () => {
  return (
    <div>
      {/* nav */}
      <div className="py-4 font-extrabold bg-white text-4xl w-screen flex lg:hidden justify-center items-center ">
        60 Cars
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        {/* <HeaderAnnouncement /> */}
        <div className=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="" />
        </div>
      </div>
      {/* end nav */}

      <div className="lg:px-0 mx-auto  ">
        <div
          class="absolute bg-cover bg-bottom brightness-50 bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url(/images/contact/contact_bg3.jpg)`,
          }}
        />
        <div className="px-3 lg:px-0 lg:container mx-auto w-full  relative py-10 lg:py-10 text-white">
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
