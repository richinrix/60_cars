import React from "react";

const HeaderAnnouncement = () => {
  const Tab = () => (
    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );

  return (
    <div className=" bg-black text-white lg:flex items-center">
      <marquee>
        <div className="flex justify-end py-1  ">
          <span>
            24x7 Online Centralized Reservation Desk{" "}
            <span className=" w-6">{Tab()}</span> Book Now : +91 87226 20158 /
            +91 91481 22012
          </span>
          <span className=" hidden lg:flex ml-20 lg:ml-96">
            24x7 Online Centralized Reservation Desk{" "}
            <span className=" w-6">{Tab()}</span> Book Now : +91 87226 20158 /
            +91 91481 22012
          </span>
        </div>
      </marquee>
    </div>
  );
};

export default HeaderAnnouncement;
