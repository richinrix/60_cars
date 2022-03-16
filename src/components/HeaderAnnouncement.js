import React from "react";

const HeaderAnnouncement = () => {
  const Tab = () => (
    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );

  return (
    <div class=" bg-black text-white lg:flex items-center">
      <marquee>
        <div class="flex justify-end py-1  ">
          <span>
            24x7 Online Centralized Reservation Desk{" "}
            <span class=" w-6">{Tab()}</span> Book Now : +91 87226 20158
          </span>
          <span className=" hidden lg:flex ml-20 lg:ml-96">
            24x7 Online Centralized Reservation Desk{" "}
            <span class=" w-6">{Tab()}</span> Book Now : +91 87226 20158
          </span>
        </div>
      </marquee>
    </div>
  );
};

export default HeaderAnnouncement;
