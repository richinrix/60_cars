import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, HeaderAnnouncement } from "../components/";
import axios from "axios";
// import { generalContact, companyContact } from "./ContactContent";
import generalContact from "./ContactContent";
import { useForm } from "react-hook-form";

const Contact = () => {
  let params = useParams();
  const content = params.type === "company" ? generalContact : generalContact;
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // let formData = {
    //   Name: data["First Name"] + " " + data["Last Name"],
    //   Subject: data["Subject"],
    //   Email: data["Email"],
    //   Message: data["Message"],
    //   Phone: data["Phone Number"],
    // };
    // PostData(formData);
    setSent(true);

    setTimeout(() => {
      setSent(false);

      document.getElementById("contactForm").reset();
    }, 1000);
  };
  const Header = () => (
    <>
      <div class="fixed z-50 lg:hidden">
        <div class="   lg:hidden ">
          <HeaderAnnouncement />
        </div>
        <div class="  py-2 font-leagueSpartan  font-extrabold bg-gray-400 bg-opacity-40 backdrop-blur-md   text-4xl w-screen flex lg:hidden justify-center items-center ">
          60 Cars
        </div>
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <div class="hidden lg:block">
          <HeaderAnnouncement />
        </div>

        <div class=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="" />
        </div>
      </div>
    </>
  );
  return (
    <div className="overflow-x-clip">
      {/* nav */}
      {Header()}

      <div class="lg:px-0 mx-auto ">
        <div class="px-3 lg:px-20 py-32 lg:pt-0  mx-auto w-full  relative">
          {/* form */}
          <form
            id="contactForm"
            onSubmit={handleSubmit(onSubmit)}
            class=" mx-auto   lg:w-3/5 self-center  border-2 border-black rounded-xl py-5 px-3 lg:p-10 "
          >
            <div class="text-center text-2xl lg:text-5xl my-3 font-bold font-leagueSpartan">
              {params.type === "company" ? "Company Sign Up" : "Contact Us"}
            </div>
            <div class="lg:w-1/2 flex flex-col mx-auto ">
              <div className="w-full">
                <div class="font-bold my-2 ">Email Address</div>
                <input
                  type="text"
                  className="border-2 border-black w-full py-1 px-2  rounded-md "
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <div class="font-bold my-2">Compay Name</div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="outline-none border-2 w-full border-black rounded-md px-2 py-1"
                />
              </div>
              <div class="flex w-full justify-between my-2">
                <div className=" pr-1 lg:w-1/2 ">
                  <div class="font-bold">Department</div>
                  <select
                    className="outline-none border-2 w-full  border-black rounded-md px-2 py-1"
                    name=""
                    id=""
                    // onChange={(e) => setCarType(e.target.value)}
                  >
                    <option value="Standard">Admin</option>
                    <option value="Sedan">Travel Desk</option>
                    <option value="MUV">Finance</option>
                    <option value="Premium">HR</option>
                    <option value="Luxury">Others</option>
                  </select>
                </div>
                <div className=" pl-1 lg:w-1/2 ">
                  <div class="font-bold">Number of Employees</div>
                  <select
                    className="outline-none border-2 w-full border-black rounded-md px-2 py-1"
                    name=""
                    id=""
                    // onChange={(e) => setCarType(e.target.value)}
                  >
                    <option value="Standard">Less than 50</option>
                    <option value="Sedan">5 to 200</option>
                    <option value="MUV">200-2000</option>
                    <option value="Premium">More than 2000</option>
                  </select>
                </div>
              </div>
              <div className="w-full my-2 ">
                <div class="font-bold">Enter the State</div>
                <input
                  className="outline-none border-2 w-full border-black rounded-md px-2 py-1"
                  placeholder="State"
                  name=""
                  id=""
                  // onChange={(e) => setCarType(e.target.value)}
                />
              </div>
              <div className="w-full my-2">
                <div class="font-bold">Mobile Number</div>
                <input
                  className="outline-none border-2 w-full border-black rounded-md px-2 py-1"
                  type="number"
                  placeholder="Phone Number"
                  name=""
                  id=""
                  // onChange={(e) => setCarType(e.target.value)}
                />
                <div class="text-xs">
                  We wil get in contact with you on this number.
                </div>
              </div>
              {params.type === "general" && (
                <div className="w-full my-2">
                  <div class="font-bold">Message</div>
                  <textarea
                    rows={3}
                    className="outline-none border-2 w-full border-black rounded-md px-2 py-1"
                    type="number"
                    placeholder="Enter your mesage here"
                    name=""
                    id=""
                    // onChange={(e) => setCarType(e.target.value)}
                  />
                  <div class="text-xs">
                    We wil get in contact with you on this number.
                  </div>
                </div>
              )}
              <div
                onClick={onSubmit}
                class=" hover:bg-gray-600 cursor-pointer w-full text-center rounded-md mx-auto my-2 bg-black text-white px-3 py-2 font-bold"
              >
                Submit
              </div>
              {sent && (
                <div class="bg-green-400 rounded-md px-2 py-1 text-sm text-center mx-auto">
                  Submitted Successfully
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
