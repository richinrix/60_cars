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
    setTimeout(() => {
      setSent(true);
      document.getElementById("contactForm").reset();
    }, 600);
  };
  return (
    <div className="overflow-x-clip">
      {/* nav */}
      <div class=" font-leagueSpartan py-4 font-extrabold bg-white text-4xl w-screen flex lg:hidden justify-center items-center ">
        60 Cars
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <HeaderAnnouncement />
        <div class=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="about" />
        </div>
      </div>

      <div class="lg:px-0 mx-auto ">
        <div class="px-3 lg:px-0 lg:container mx-auto w-full  relative">
          {/* form */}
          {/* <form
            id="contactForm"
            onSubmit={handleSubmit(onSubmit)}
            class="text-sm mx-auto my-10 lg:w-4/5 self-center border-2 border-black lg:p-10 "
          >
            <div class="text-center text-5xl my-3 font-bold font-leagueSpartan">
              {params.type === "company" ? "Company Sign Up" : "Contact Us"}
            </div>
            <div className="w-full">
              <div class="font-bold text-xl">Email Address</div>
              <input
                type="text my-4 border-2 border-black w-full p-2 outline-none "
                placeholder="you@company.com"
              />
            </div>
            <div>
              <div class="font-bold">Compay Name</div>
              <input type="text" placeholder="Company Name" />
            </div>
            <div class="flex w-full justify-between">
              <div className="px-2 lg:w-1/2 ">
                <div class="font-bold">Department</div>
                <select
                  className=""
                  name=""
                  id=""
                  // onChange={(e) => setCarType(e.target.value)}
                >
                  <option value="Standard">Admi</option>
                  <option value="Sedan">Travel Desk</option>
                  <option value="MUV">Finance</option>
                  <option value="Premium">HR</option>
                  <option value="Luxury">Others</option>
                </select>
              </div>
            </div>
            <div className="px-2 lg:w-1/2 ">
              <div class="font-bold">Number of Employees</div>
              <select
                className=""
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
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
