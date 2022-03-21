// TODO
// auto suggestions
//  Graphcms query triggers
//  Slack integration
import moment from "moment";
import React, { useState, useEffect } from "react";
import { submitSlack } from "../services/slack";
import { submitOrder } from "../services/graphCMS";
const axios = require("axios");
const Booking = () => {
  const bookingDateRange = 14;
  // date
  const currentDay = new Date();
  let maxDate =
    currentDay.getFullYear() +
    "-" +
    (parseInt(currentDay.getMonth()) + 1) +
    "-" +
    (parseInt(currentDay.getDate()) + bookingDateRange);
  maxDate = moment(maxDate).format("YYYY-MM-DD");
  // * inputs
  const [bookingOption, setBookingOption] = useState("cityride"); // citry ride or outstation
  const [bookingTime, setBookingTime] = useState("now"); //now or later
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingLaterTime, setBookingLaterTime] = useState();
  const [bookingLaterDate, setBookingLaterDate] = useState();
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  // * selected coords
  const [pickupData, setPickupData] = useState({
    addressLine2: "",
    stateCode: "",
    coordinates: {
      lat: "",
      lon: "",
    },
  });
  const [dropData, setDropData] = useState({
    addressLine2: "",
    stateCode: "",
    coordinates: {
      lat: "",
      lon: "",
    },
  });
  const [pickupCoords, setpickupCoords] = useState({
    lat: "",
    lon: "",
  });
  const [dropCoords, setdropCoords] = useState({
    lat: "",
    lon: "",
  });
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
          console.log(response.data.features);
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
    // console.log(checkForm(), pickup, drop, phoneNumber);
    if (checkForm()) {
      const data = {
        pickup,
        drop,
        phoneNumber,
        bookingOption,
        bookingTime,
        bookingLaterTime,
        bookingLaterDate,
        pickupCoords,
        dropCoords,
        pickupData,
        dropData,
      };

      setShowQuerySent(true);
      //* submitting to slack
      submitSlack(data);

      setTimeout(() => {
        setShowQuerySent(false);
        document.getElementById("bookingForm").reset();
        setPickup("");
        setDrop("");
        setPhoneNumber("");
        setBookingTime("now");
      }, 10000);
    }
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
            onFocus={(e) => setSuggestDrop(false)}
            onBlur={(e) => setSuggestPickup(false)}
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
                let {
                  name,
                  address_line2,
                  country_code,
                  state_code,
                  lat,
                  lon,
                } = result.properties;
                if (country_code == "in")
                  return (
                    <div
                      className="flex leading-4  justify-between cursor-pointer w-full mb-2  "
                      onClick={(e) => {
                        setPickup(name);
                        setSuggestPickup(false);
                        setpickupCoords({ lat, lon });
                        setPickupData({
                          addressLine2: address_line2,
                          stateCode: state_code,
                          coordinates: { lat, lon },
                        });
                      }}
                    >
                      <div className="w-2/5">{name}</div>
                      <div className="text-right">
                        {address_line2.length > 5
                          ? address_line2.slice(0, address_line2.length - 5)
                          : state_code}
                      </div>
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
            onFocus={(e) => setSuggestPickup(false)}
            onBlur={(e) => setSuggestDrop(false)}
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
                let {
                  name,
                  address_line2,
                  country_code,
                  state_code,
                  lat,
                  lon,
                } = result.properties;
                if (country_code == "in")
                  return (
                    <div
                      className="flex leading-4  justify-between cursor-pointer w-full mb-2  "
                      onClick={(e) => {
                        setDrop(name);
                        setSuggestDrop(false);
                        setdropCoords({ lat, lon });
                        setDropData({
                          addressLine2: address_line2,
                          stateCode: state_code,
                          coordinates: { lat, lon },
                        });
                      }}
                    >
                      <div className="w-2/5">{name}</div>
                      <div className="text-right">
                        {address_line2.length > 5
                          ? address_line2.slice(0, address_line2.length - 5)
                          : state_code}
                      </div>
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
            onFocus={(e) => {
              setSuggestPickup(false);
              setSuggestDrop(false);
            }}
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
              className=" px-2 col-span-4 lg:col-span-3 mx-2 my-1 py-1 pr-2  rounded-md outline-none w-full hover:bg-gray-200 focus:bg-gray-200"
              type="time"
              placeholder="Time"
              onFocus={() => {
                setSuggestPickup(false);
                setSuggestDrop(false);
              }}
              onChange={(e) => setBookingLaterTime(e.target.value)}
            />
            <div class="col-span-1 lg:col-span-3 "></div>
            <input
              className="   col-span-5 lg:col-span-4 mx-2 my-1 py-1 rounded-md outline-none w-full hover:bg-gray-200 focus:bg-gray-200"
              type="date"
              onFocus={() => {
                setSuggestPickup(false);
                setSuggestDrop(false);
              }}
              onChange={(e) => setBookingLaterDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              max={maxDate}
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
            onFocus={() => {
              setSuggestPickup(false);
              setSuggestDrop(false);
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
            onFocus={() => {
              setSuggestPickup(false);
              setSuggestDrop(false);
            }}
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
