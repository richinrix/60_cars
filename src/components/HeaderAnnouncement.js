import React from "react";

const HeaderAnnouncement = () => {
  const Tab = () => (
    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );

  return (
    <div class="hidden bg-black text-white lg:flex items-center">
      <marquee>
        <div class="flex py-1  ">
          <span>
            24x7 Online Centralized Reservation Desk{" "}
            <span class=" w-6">{Tab()}</span> Book Now : +91 87226 20158
          </span>
        </div>
      </marquee>
    </div>
  );
};

export default HeaderAnnouncement;
