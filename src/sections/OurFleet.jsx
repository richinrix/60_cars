import React, { useState } from "react";
// icons
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaFan } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
// tooltip
import ReactTooltip from "react-tooltip";

const fleet = [
  {
    id: 1,
    name: "Sedan",
    icon: "/images/fleet-icons/sedan.svg",
    image: "/images/fleet-cars/dezire.png",
    tagline: "The Sedan is a compact car that is great for the city.",
    features: "ac, cashless",
    description:
      "    Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.",
  },
  {
    id: 2,
    name: "Standard",
    icon: "/images/fleet-icons/sedan.svg",
    features: "ac, cashless",
    tagline: "The Mini is a compact car that is great for the city.",
    image: "/images/fleet-cars/mini/mini-accent.png",
    description:
      "    A regular comfortable AC hatchback that becomes your everyday dependable ride. An economical option for daily commute.",
  },
  {
    id: 3,
    name: "MUV",
    icon: "/images/fleet-icons/suv.png",
    image: "/images/fleet-cars/suv/kia-carnival.webp",
    features: "ac, cashless",
    tagline: "The MUV is a compact car that is great for the city.",
    description:
      "    A perfect choice of car for large groups, with plenty of room for everyone including that extra bag. ",
  },
  {
    id: 4,
    name: "Premium",
    icon: "/images/fleet-icons/luxury.svg",
    features: "ac, cashless",

    tagline: "The Mini is a compact car that is great for the city.",
    image: "/images/fleet-cars/merc.png",
    description:
      "    A regular comfortable AC hatchback that becomes your everyday dependable ride. An economical option for daily commute.",
  },
  {
    id: 5,
    name: "Luxury",
    icon: "/images/fleet-icons/luxury.svg",
    image: "/images/fleet-cars/luxury/audi.webp",
    features: "ac, cashless",

    tagline: "Experience luxury at foot steps .",
    description:
      "    A perfect choice of car for large groups, with plenty of room for everyone including that extra bag. ",
  },
];
const OurFleet = () => {
  const [selected, setSelected] = useState(fleet[0]);
  // console.log(selected.id, (selected.id + 1) % (fleet.length - 1));
  return (
    <div
      id="our-fleet"
      className="  py-8 lg:pt-24 px-3 lg:px-0 lg:container mx-auto  grid-cols-4 lg:flex lg:flex-col lg:items-center justify-center w-full  lg:mt-10 lg:h-90vh "
    >
      <div className="font-leagueSpartan  text-4xl lg:text-6xl font-bold w-full text-left">
        Our Fleet
      </div>
      {/* fleet nav */}
      <div className="  flex my-5   ">
        {fleet.map((car) => {
          return (
            <div
              id={`ourfleet-car-selection-${car.name}`}
              className="w-full flex flex-col items-center lg:mx-10"
            >
              <img
                src={car.icon}
                alt={car.name}
                key={car.name}
                className={`"  object-center rounded-full p-1 lg:p-3 border-2 hover:border-black cursor-pointer w-12 lg:w-20
            ${
              selected.name === car.name
                ? "border-2 border-black"
                : "border-white"
            }
            `}
                // width="85px"
                onClick={() => setSelected(car)}
              />
              <label
                className="text-center mt-2 cursor-pointer"
                onClick={() => setSelected(car)}
              >
                {car.name}
              </label>
            </div>
          );
        })}
      </div>
      <div className="w-full lg:h-90vh flex flex-col lg:flex-row relative ">
        {/* car details */}
        <AiOutlineLeft
          onClick={() =>
            setSelected(
              fleet[selected.id != 1 ? selected.id - 2 : fleet.length - 1]
            )
          }
          className=" hidden lg:block self-center hover:bg-black rounded-full hover:text-white  m-5 lg:mr-4  h-5 w-5 lg:h-10 lg:w-10 p-1 lg:p-2  cursor-pointer"
        />
        <div
          className="lg:w-1/2 w-full h-52 lg:h-full  rounded-xl lg:mb-0 mb-3 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${selected.image})`,
          }}
        ></div>
        <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col  lg:justify-center lg:pl-16 ">
          <div className="font-bold text-xl  ">{selected.name}</div>
          <div className="text-md lg:text-lg leading-none my-1 lg:my-0 ">
            {selected.tagline}
          </div>
          <div className="my-4 text-sm lg:text-base leading-none lg:text-black text-gray-700">
            {selected.description}
          </div>
          <div className="flex flex-row  my-4">
            {selected.features.includes("ac") && (
              <FaFan
                data-tip
                data-for="fleetAC"
                className=" outline-none text-gray-500 text-2xl hover:rotate-90 duration-500 hover:text-black mr-4"
              />
            )}
            <ReactTooltip
              id="fleetAC"
              place="bottom"
              type="dark"
              effect="solid"
            >
              <span>Air Conditioning</span>
            </ReactTooltip>
            {selected.features.includes("cashless") && (
              <BsFillCreditCard2BackFill
                data-tip
                data-for="fleetCashless"
                className=" outline-none text-gray-500 text-2xl hover:rotate-12 duration-500 hover:text-black mx-4"
              />
            )}
          </div>
          <ReactTooltip
            id="fleetCashless"
            place="bottom"
            type="dark"
            effect="solid"
          >
            <span>Cashless Payment</span>
          </ReactTooltip>
        </div>
        <AiOutlineRight
          onClick={() => setSelected(fleet[selected.id % fleet.length])}
          className="  hidden lg:block self-center hover:bg-black rounded-full hover:text-white right-0 top-0 m-5 lg:ml-4 h-5 w-5 lg:h-10 lg:w-10 p-1 lg:p-2  cursor-pointer"
        />
      </div>
    </div>
  );
};

export default OurFleet;
