import React from "react";
import { Nav, HeaderAnnouncement } from "../components/";

const Corporate = () => {
  return (
    <div>
      {/* nav */}
      <div class="py-4 font-extrabold bg-white text-4xl w-screen flex lg:hidden justify-center items-center ">
        60 Cars
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        {/* <HeaderAnnouncement /> */}
        <div class=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="about" />
        </div>
      </div>
      {/* end nav */}
      <div class="lg:px-0 mx-auto ">
        <div class="px-3 lg:px-0 lg:container mx-auto w-full  relative lg:py-10">
          <div class="text-2xl lg:text-6xl font-bold font-leagueSpartan text-center">
            Corporate Travel Management
          </div>
          <div className="w-full flex justify-center my-4 text-sm lg:text-base leadin text-justify lg:text-center">
            <div class="w-full lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis molestiae sint aliquid. Temporibus at commodi, nisi
              quibusdam similique unde repudiandae.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reiciendis molestiae sint aliquid.
              Temporibus at commodi, nisi quibusdam similique unde repudiandae.
            </div>
          </div>
          <div class="lg:py-10 flex lg:flex-row flex-col items-center justify-center">
            <a
              href="/contact/company"
              class="bg-black text-white px-3 py-2 my-4 lg:mx-10 rounded-md text-xl lg:text-2xl"
            >
              Sign Up For your company
            </a>
            <a
              href="/contact/general"
              class="bg-black text-white px-3 py-2 my-4 lg:mx-10 rounded-md text-xl lg:text-2xl"
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
