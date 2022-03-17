import React from "react";
// car image
import CarImg from "../images/car8.png";
import WheelImg from "../images/wheel.png";
import { Booking, Brands } from "../components/";

const LandingSection = () => {
  return (
    <div className="relative ">
      <div
        class="bg-no-repeat bg-cover w-screen h-90vh lg:h-90vh absolute"
        style={{
          backgroundImage: `url("./images/map.png")`,
          zIndex: "-1",
        }}
      />

      <div
        id="home"
        className=" px-3 lg:px-20  mx-auto   h-screen lg:h-90vh lg:grid lg:grid-cols-2 bg-no-repeat bg-cover py-12 "
        style={{
          // backgroundImage: `url("./images/map.png")`,
          zIndex: "10",
        }}
      >
        <div class="flex flex-col justify-center  lg:justify-start ">
          <div class=" font-leagueSpartan text-4xl my-10 mt-20 lg:mt-10 lg:mb-0 md:text-6xl font-bold ">
            Premium <br /> Car Rentals
          </div>
          <div className="  mt-5 mx-auto  flex justify-center lg:justify-start items-center w-full ">
            <Booking />
          </div>
        </div>
        {/* hero image */}
        <div class="hidden lg:block  relative ">
          {/* <img
            src="https://media.istockphoto.com/photos/route-of-arial-view-futuristic-route-gps-tracking-map-navigator-with-picture-id1291379828?b=1&k=20&m=1291379828&s=170667a&w=0&h=g8t_KVN_8H94oQNnf0UgKN7e9CGVpQzydsY8eUT7nac="
            alt="map"
            className="HeroMapImage top-28  absolute object-contain "
          /> */}
          <img
            src={CarImg}
            width="250%"
            alt="car"
            className="  moveCar bottom-20  absolute   object-contain"
          />
          {/* <img
          src={WheelImg}
          width="200px"
          alt=""
          className="  moveWheel  bottom-36    absolute   object-contain"
        /> */}
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
