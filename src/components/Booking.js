// TODO
// auto suggestions
//  Graphcms query triggers
//  Slack integration
//  get back to us message on booking
// transparent and blurred bg card
import moment from "moment";
import React, { useState, useEffect } from "react";
const axios = require("axios");
const Booking = () => {
  const bookingDateRange = 14;
  // date
  const currentDay = new Date();
  let minDate =
    currentDay.getFullYear() +
    "-" +
    (parseInt(currentDay.getMonth()) + 1) +
    "-" +
    (parseInt(currentDay.getDate()) + bookingDateRange);
  minDate = moment(minDate).format("YYYY-MM-DD");
  // * inputs
  const [bookingOption, setBookingOption] = useState("cityride");
  const [bookingTime, setBookingTime] = useState("now"); //now or later
  const [bookingDate, setBookingDate] = useState(minDate); // sets the limit of days the user can book
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState(null);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  // * auto suggestions
  const [suggestPickup, setSuggestPickup] = useState(false);
  const [suggestDrop, setSuggestDrop] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);
  // *query message
  const [showQuerySent, setShowQuerySent] = useState(false);

  useEffect(() => {
    let config = {
      method: "get",
      url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${pickup}&apiKey=553b89f8b0fa4d209a2641bc8afb2cda`,
      headers: {},
    };

    if (pickup.trim() !== "") {
      axios(config)
        .then(function (response) {
          setPickupSuggestions(response.data.features);
          // console.log(pickup, pickupSuggestions);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setPickupSuggestions([]);
    }
  }, [pickup]);
  useEffect(() => {
    let config = {
      method: "get",
      url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${drop}&apiKey=553b89f8b0fa4d209a2641bc8afb2cda`,
      headers: {},
    };

    if (drop.trim() !== "") {
      axios(config)
        .then(function (response) {
          setDropSuggestions(response.data.features);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setDropSuggestions([]);
    }
  }, [drop]);
  // * form submit\
  const phoneRegex = "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$";
  const checkForm = () => {
    if (pickup !== "" && drop !== "" && phoneNumber.match(phoneRegex)) {
      return true;
    } else {
      return false;
    }
  };
  const submitQuery = (e) => {
    e.preventDefault();
    if (checkForm()) setShowQuerySent(true);
    // console.log(checkForm(), pickup, drop, phoneNumber);

    setTimeout(() => {
      setShowQuerySent(false);
      document.getElementById("bookingForm").reset();
      setPickup("");
      setDrop("");
      setPhoneNumber("");
    }, 10000);
  };

  return (
    <div className="   rounded-md py-3 px-3 flex flex-col md:w-4/5  backdrop-blur-sm   bg-white/30">
      {/* nav */}
      <div class="justify-around flex border-b pb-3 border-black mb-5 text-sm lg:text-lg">
        <div
          onClick={(e) => setBookingOption("cityride")}
          className={`  flex items-center text-center border-2 border-black cursor-pointer rounded-l-full rounded-r-full mx-2 p-1 lg:mx-4 lg:px-3     ${
            bookingOption == "cityride" ? "bg-black  text-white " : ""
          }`}
        >
          <div class="  my-auto">City Ride</div>
        </div>
        <div
          onClick={(e) => setBookingOption("outstation")}
          className={`flex items-center text-center cursor-pointer  border-2 rounded-l-full rounded-r-full mx-2 p-1 lg:mx-4 lg:px-3  ${
            bookingOption == "outstation"
              ? "bg-black  text-white border-black"
              : "border-black"
          }`}
        >
          Outstation
        </div>
        <a
          href="/corporate"
          className=" flex items-center text-center border-black border-2 rounded-l-full rounded-r-full mx-2 p-1 lg:mx-4 lg:px-3 "
        >
          Corporate
        </a>
      </div>
      {/* form */}
      <form
        id="bookingForm"
        action=""
        className="flex-col flex justify-between text-xs lg:text-sm"
      >
        <div
          className="  hover:bg-gray-200 focus:bg-gray-200 grid grid-cols-6 relative  items-center bg-white rounded-md px-3"
          onClick={(e) => setSuggestDrop(false)}
        >
          <div className="uppercase col-span-1 border-black border-r-1 pr-3">
            Pickup
          </div>
          <input
            className="   col-span-5 mx-2 my-1 py-1 bg-opacity-90 outline-none w-full hover:bg-gray-200 focus:bg-gray-200"
            type="text"
            value={pickup}
            // onFocus={(e) => setSuggestPickup(true)}
            // onBlur={(e) => setSuggestPickup(false)}
            onChange={(e) => {
              setSuggestPickup(true);
              setPickup(e.target.value);
            }}
          />
          {suggestPickup && pickupSuggestions.length > 0 && (
            <div
              class="absolute bg-gray-100  py-2 z-10  px-3  w-full flex flex-col"
              style={{ top: "90%" }}
            >
              {pickupSuggestions.map((result) => {
                let suggestion = result.properties;
                if (suggestion.state_code == "KA")
                  return (
                    <div
                      // value={suggestion.name}
                      className="flex  justify-between cursor-pointer "
                      onClick={(e) => {
                        setPickup(suggestion.name);
                        setSuggestPickup(false);
                      }}
                      // onTouchStart={(e) => console.log(suggestion.name)}
                    >
                      <div>{suggestion.name}</div>
                      <div>{suggestion.address_line2}</div>
                    </div>
                  );
              })}
            </div>
          )}
        </div>
        <div
          className=" hover:bg-gray-200 focus:bg-gray-200 grid grid-cols-6 relative mt-2 items-center bg-white rounded-md px-3"
          onClick={(e) => setSuggestPickup(false)}
        >
          <div className="uppercase col-span-1 border-black border-r-1 pr-3">
            Drop
          </div>
          <input
            className=" col-span-5 mx-2 my-1 py-1  outline-none w-full hover:bg-gray-200 focus:bg-gray-200"
            type="text"
            value={drop}
            // onFocus={(e) => setSuggestDrop(true)}
            // onBlur={(e) => setSuggestDrop(false)}
            onChange={(e) => {
              setSuggestDrop(true);
              setDrop(e.target.value);
            }}
          />
          {suggestDrop && dropSuggestions.length > 0 && (
            <div
              class="absolute bg-gray-100  py-2 z-10  px-3  w-full flex flex-col"
              style={{ top: "90%" }}
            >
              {dropSuggestions.map((result) => {
                let suggestion = result.properties;
                if (suggestion.state_code == "KA")
                  return (
                    <div
                      // value={suggestion.name}
                      className="flex  justify-between cursor-pointer "
                      onClick={(e) => {
                        setDrop(suggestion.name);
                        setSuggestDrop(false);
                      }}
                    >
                      <div>{suggestion.name}</div>
                      <div>{suggestion.address_line2}</div>
                    </div>
                  );
              })}
            </div>
          )}
        </div>
        <div
          className="hover:bg-gray-200 focus:bg-gray-200 grid grid-cols-6 mt-2 items-center bg-white rounded-md px-3"
          onClick={(e) => {
            setSuggestDrop(false);
            setSuggestPickup(false);
          }}
        >
          <div className="uppercase col-span-1 border-black border-r-1 pr-3">
            When
          </div>
          <select
            className=" col-span-5 mx-2 my-1 py-1 rounded-md outline-none w-full  hover:bg-gray-200 focus:bg-gray-200"
            name=""
            id=""
            onChange={(e) => setBookingTime(e.target.value)}
          >
            <option value="now">Now</option>
            <option value="later">Later</option>
          </select>
        </div>
        {bookingTime == "later" ? (
          <div
            onClick={(e) => {
              setSuggestDrop(false);
              setSuggestPickup(false);
            }}
            className=" grid grid-cols-12 mt-2 items-center  bg-white rounded-md px-3 hover:bg-gray-200 focus:bg-gray-200"
          >
            <div className="uppercase col-span-2 border-black border-r-1 pr-3">
              Date
            </div>
            <input
              className=" px-2 col-span-5 lg:col-span-3 mx-2 my-1 py-1 pr-2  rounded-md outline-none w-full hover:bg-gray-200 focus:bg-gray-200"
              type="time"
              placeholder="Time"
            />
            <div class="col-span-1 lg:col-span-3 "></div>
            <input
              className=" pl-2 col-span-4 lg:col-span-4 mx-2 my-1 py-1 rounded-md outline-none w-full hover:bg-gray-200 focus:bg-gray-200"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              max={minDate}
            />
          </div>
        ) : null}
        <div
          onClick={(e) => {
            setSuggestDrop(false);
            setSuggestPickup(false);
          }}
          className=" grid grid-cols-6 mt-2 items-center bg-white rounded-md px-3 hover:bg-gray-200 focus:bg-gray-200"
        >
          <div className="uppercase col-span-1 border-black border-r-1 pr-3">
            Car
          </div>
          <select
            onClick={(e) => {
              setSuggestDrop(false);
              setSuggestPickup(false);
            }}
            className=" col-span-5 mx-2 my-1 py-1 rounded-md outline-none w-full  hover:bg-gray-200 focus:bg-gray-200"

            // onChange={(e) => setCarType(e.target.value)}
          >
            <option value="Standard">Standard</option>
            <option value="Sedan">Sedan</option>
            <option value="MUV">MUV</option>
            <option value="Premium">Premium</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        <div
          onClick={(e) => {
            setSuggestDrop(false);
            setSuggestPickup(false);
          }}
          className=" grid grid-cols-6 mt-2 items-center bg-white rounded-md px-3 hover:bg-gray-200 focus:bg-gray-200"
        >
          <div className="uppercase col-span-1 border-black border-r-1 pr-3 ">
            Phone
          </div>
          <input
            className=" col-span-5 mx-2 my-1 py-1 rounded-md outline-none w-full hover:bg-gray-200 focus:bg-gray-200"
            type=""
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div class="text-xs text-red-500">
          {phoneNumber &&
            (phoneNumber.match(phoneRegex)
              ? null
              : "Phone number is not valid")}
        </div>
      </form>
      {/* button */}
      <div
        onClick={(e) => {
          setSuggestDrop(false);
          setSuggestPickup(false);
        }}
        className="flex justify-center w-full mt-2 "
      >
        <button
          onClick={submitQuery}
          className="bg-black  w-1/2 text-white px-4 py-2 rounded-md"
        >
          Send Enquiry
        </button>
      </div>
      {showQuerySent && (
        <div className=" max-w-max self-center text-center bg-green-600 px-2 text-white rounded-md my-2">
          We will get back to you in 5-10 minutes!
        </div>
      )}
    </div>
  );
};

export default Booking;
