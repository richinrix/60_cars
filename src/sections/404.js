import React from "react";
import { Nav, HeaderAnnouncement, Team } from "../components/";

const Error = () => {
  const Header = () => (
    <>
      <div className="fixed z-50 lg:hidden">
        <div className="   lg:hidden ">
          <HeaderAnnouncement />
        </div>
        <div className="  py-2 font-leagueSpartan  font-extrabold bg-gray-400 bg-opacity-40 backdrop-blur-md   text-4xl w-screen flex lg:hidden justify-center items-center ">
          60 Cars
        </div>
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <div className="hidden lg:block">
          <HeaderAnnouncement />
        </div>

        <div className=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="" />
        </div>
      </div>
    </>
  );
  return (
    <div>
      {Header()}
      <div class="h-90vh flex items-center justify-between w-full py-5 ">
        <div
          class="hidden lg:block w-full lg:w-1/2 bg-cover bg-center bg-no-repeat h-full bg-red-100 "
          style={{
            backgroundImage: `url("/images/lost_forest.jpg")`,
          }}
        ></div>
        <div class="w-full lg:w-1/2 flex justify-center items-center lg:px-10 flex-col">
          <div class="text-9xl tracking-widest font-extrabold font-leagueSpartan">
            404
          </div>
          <div class=" text-xl lg:text-2xl">
            Page not found. Go back{" "}
            <a
              href="/"
              class="font-bold bg-black px-1 border-1 border-black text-white hover:bg-white hover:text-black"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
