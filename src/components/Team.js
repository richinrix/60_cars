import React from "react";

const Team = () => {
  return (
    <div className="px-3 lg:px-0 lg:container mx-auto relative lg:min-h-screen w-full bg-black text-white flex flex-col justify-center py-10">
      <div class=" font-leagueSpartan text-2xl lg:text-8xl font-bold mb-10">
        Management Team
      </div>
      <div class="flex flex-row justify-between w-full">
        <div class="w-1/2 lg:pr-16 ">
          <div class="text-center lg:text-left text-base lg:text-2xl">
            Founder & Chief Execution Officer{" "}
          </div>
          <div class="  mx-auto w-32 lg:w-64 h-32 lg:h-72 my-4 bg-red-100 rounded-xl"></div>
          <div class="text-xl w-full text-center"> Yeshwanth Chauhan</div>
        </div>
        <div class="w-1/2 lg:pl-16 ">
          <div class="text-center lg:text-left text-base lg:text-2xl">
            Chief Operating Officer
          </div>
          <div class="  mx-auto w-32 lg:w-64 h-32 lg:h-72 my-4 bg-red-100 rounded-xl"></div>
          <div class="text-xl w-full text-center"> Salman Shariff</div>
        </div>
        <div class="w-1/2 lg:pl-16 ">
          <div class="text-center lg:text-left text-base lg:text-2xl">
            Chief Operating Officer
          </div>
          <div class="  mx-auto w-32 lg:w-64 h-32 lg:h-72 my-4 bg-red-100 rounded-xl"></div>
          <div class="text-xl w-full text-center"> Salman Shariff</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
