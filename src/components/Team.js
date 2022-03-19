import React from "react";
import Person1 from "../images/person/man1.png";
import Person2 from "../images/person/man2.png";
import Person3 from "../images/person/woman.png";
const Team = () => {
  return (
    <div className="px-3 lg:px-0  mx-auto relative  w-full bg-black text-white flex flex-col justify-center pt-10 pb-10 lg:min-h-screen lg:py-10">
      <div class=" font-leagueSpartan text-2xl lg:text-7xl font-bold mb-5 lg:mb-10">
        Directors
      </div>
      {/* <div class="text-xl lg:text-4xl font-leagueSpartan">Directors</div> */}
      <div class="flex flex-wrap items-end lg:flex-row justify-between w-full">
        <div class="my-2  mx-auto ">
          <div class="text-center lg:text-left text-base lg:text-2xl  font-bold">
            Primary Director
          </div>
          <img
            src={Person1}
            class="  mx-auto w-32 lg:w-64 h-32 lg:h-64 my-4  rounded-xl"
          ></img>
          <div class="text-sm lg:text-xl w-full text-center">
            {" "}
            Mr Yeshwanth Chauhan
          </div>
        </div>
        <div class="my-2  mx-auto">
          <div class="text-center lg:text-left text-base lg:text-2xl font-bold">
            Secondary Director
          </div>
          <img
            src={Person3}
            class="  mx-auto w-32 lg:w-64 h-32 lg:h-64 my-4  rounded-xl"
          ></img>
          <div class="text-sm lg:text-xl w-full text-center">
            {" "}
            Mrs Sulochana
          </div>
        </div>
      </div>
      <div class=" lg:mt-10 mt-5 font-leagueSpartan text-2xl lg:text-7xl font-bold mb-5 lg:mb-10">
        Management Team
      </div>
      <div class="my-4 lg:my-2   mx-auto">
        <div class="text-center lg:text-left text-base lg:text-2xl font-bold">
          Chief Operating Officer
        </div>
        <img
          src={Person2}
          class="  mx-auto w-32 lg:w-64 h-32 lg:h-64 my-4  rounded-xl"
        ></img>
        <div class="text-sm lg:text-xl w-full text-center">
          {" "}
          Mr Salman Shariff
        </div>
      </div>
    </div>
  );
};

export default Team;
