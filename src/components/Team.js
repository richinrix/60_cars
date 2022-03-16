import React from "react";

const Team = () => {
  return (
    <div className="px-3 lg:px-0 lg:container mx-auto relative lg:min-h-screen w-full bg-black text-white flex flex-col justify-center py-10">
      <div class="text-8xl font-bold mb-10">Management Team</div>
      <div class="flex flex-col lg:flex-row justify-between w-full">
        <div class="lg:w-1/2 lg:pr-16 ">
          <div class="text-2xl">Founder & Chief Execution Officer </div>
          <div class="  mx-auto w-64 h-72 my-4 bg-red-100 rounded-xl"></div>
          <div class="text-xl w-full text-center"> Yeshwanth Chauhan</div>
        </div>
        <div class="lg:w-1/2 lg:pl-16 ">
          <div class="text-2xl">Chief Operating Officer</div>
          <div class="  mx-auto w-64 h-72 my-4 bg-red-100 rounded-xl"></div>
          <div class="text-xl w-full text-center"> Salman Shariff</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
