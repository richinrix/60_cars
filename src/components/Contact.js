import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, HeaderAnnouncement } from "../components/";
import { submitGeneralContact, submitCorporateSignUp } from "../services/slack";
const Contact = () => {
  let params = useParams();
  const [sent, setSent] = useState(false);
  const [wrongInputs, setWrongInputs] = useState(false);
  // input fields
  const [content, setContent] = useState({
    type: params.type,
    email: "",
    phoneNumber: "",
    companyName: "",
    companyEmail: "",
    companyState: "Andhra Pradesh",
    department: "Admin",
    NumberOfEmployees: "Less than 50",
    Message: "",
  });

  // states of india
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
  ];

  // validation helpers
  const validateEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex =
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneNumberRegex.test(phoneNumber);
  };
  // const handleValidation = (field) => {
  const checkForm = () => {
    let isValid = false;
    if (
      validateEmail(content.companyEmail) &&
      validatePhoneNumber(content.phoneNumber) &&
      validateEmail(content.email) &&
      content.companyName.length > 1 &&
      content.companyState.length > 1
    ) {
      if (
        content.type === "company" ||
        (content.type === "general" && content.Message.length >= 4)
      )
        isValid = true;
    }
    return isValid;
  };
  const onSubmit = () => {
    if (checkForm()) {
      setWrongInputs(false);
      if (params.type === "general") {
        // submitGeneralContact(content);
      } else {
        // submitCorporateSignUp(content);
      }
    } else {
      setWrongInputs(true);
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      document.getElementById("contactForm").reset();
      // reset content
      setContent({
        type: params.type,
        email: "",
        phoneNumber: "",
        companyName: "",
        companyEmail: "",
        companyState: "Andhra Pradesh",
        department: "Admin",
        NumberOfEmployees: "Less than 50",
        Message: "",
      });
    }, 1000);
  };
  const Header = () => (
    <>
      <div className="fixed z-50 lg:hidden">
        <div className="   lg:hidden ">{/* <HeaderAnnouncement /> */}</div>
        <div className="  py-2 font-leagueSpartan  font-extrabold bg-gray-400 bg-opacity-40 backdrop-blur-md   text-4xl w-screen flex lg:hidden justify-center items-center ">
          60 Cars
        </div>
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <div className="hidden lg:block">{/* <HeaderAnnouncement /> */}</div>

        <div className=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="" />
        </div>
      </div>
    </>
  );
  return (
    <div className="overflow-x-clip">
      {/* nav */}
      {Header()}

      <div className="lg:px-0 mx-auto relative  ">
        <div
          class="w-full h-full bg-red-100 absolute brightness-75 lg:brightness-50 bg-right lg:bg-bottom bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(/images/contact/contact_bg2.jpg)`,
          }}
        />

        <div className="px-3 md:px-20 lg:px-20 py-32 lg:pt-10  mx-auto w-full  relative">
          {/* form */}
          <form
            id="contactForm"
            className=" text-white backdrop-blur-sm mx-auto bg-cover bg-center bg-no-repeat   lg:w-3/5 self-center  border-2 border-black rounded-xl py-5 px-3 lg:p-10 "
          >
            <div className="text-center text-2xl lg:text-5xl my-3  font-bold  font-leagueSpartan">
              {params.type === "company" ? "Company Sign Up" : "Contact Us"}
            </div>
            <div className="lg:w-1/2 flex flex-col mx-auto ">
              <div className="w-full">
                <div className="  my-2 ">Email Address</div>
                <input
                  type="text"
                  className={`text-black outline-none border-2 w-full  rounded-md px-2 py-1 ${
                    !validateEmail(content.email) && content.email !== ""
                      ? "border-red-500"
                      : "border-black"
                  } `}
                  placeholder="you@company.com"
                  onChange={(e) =>
                    setContent({ ...content, email: e.target.value })
                  }
                />
              </div>
              <div>
                <div className="  my-2">Compay Name</div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className={`text-black outline-none border-2 w-full  rounded-md px-2 py-1 ${
                    content.companyName.length < 2 && content.companyName !== ""
                      ? "border-red-500"
                      : "border-black"
                  } `}
                  onChange={(e) =>
                    setContent({ ...content, companyName: e.target.value })
                  }
                />
              </div>
              <div>
                <div className="  my-2">Compay Email Adress</div>
                <input
                  type="text"
                  placeholder="Company Email Address"
                  className={`text-black outline-none border-2 w-full  rounded-md px-2 py-1 ${
                    !validateEmail(content.companyEmail) &&
                    content.companyEmail !== ""
                      ? "border-red-500"
                      : "border-black"
                  } `}
                  onChange={(e) =>
                    setContent({ ...content, companyEmail: e.target.value })
                  }
                />
              </div>
              <div className="flex w-full justify-between my-2">
                <div className=" pr-1 md:w-1/2 lg:w-1/2 ">
                  <div className=" ">Department</div>
                  <select
                    className=" text-black outline-none border-2 w-full  border-black rounded-md px-2 py-1"
                    onChange={(e) =>
                      setContent({ ...content, department: e.target.value })
                    }
                  >
                    <option value="Admin">Admin</option>
                    <option value="Travel">Travel Desk</option>
                    <option value="Finance">Finance</option>
                    <option value="HR">HR</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className=" pl-1 md:w-1/2 lg:w-1/2 ">
                  <div className="font-">Number of Employees</div>
                  <select
                    className=" text-black outline-none border-2 w-full border-black rounded-md px-2 py-1"
                    onChange={(e) =>
                      setContent({
                        ...content,
                        NumberOfEmployees: e.target.value,
                      })
                    }
                  >
                    <option value="Less than 50">Less than 50</option>
                    <option value="50 to 200">50 to 200</option>
                    <option value="200-1000">200-1000</option>
                    <option value="More than 1000">More than 1000</option>
                  </select>
                </div>
              </div>
              <div className="w-full my-2 ">
                <div className=" ">Enter the State</div>
                <select
                  className={`text-black outline-none border-2 w-full  rounded-md px-2 py-1 ${
                    content.companyState.length < 2 &&
                    content.companyState !== ""
                      ? "border-red-500"
                      : "border-black"
                  } `}
                  placeholder="State"
                  onChange={(e) =>
                    setContent({ ...content, companyState: e.target.value })
                  }
                >
                  {states.map((state) => (
                    <option value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="w-full my-2">
                <div className=" ">Mobile Number</div>
                <input
                  className={`text-black outline-none border-2 w-full  rounded-md px-2 py-1 ${
                    !validatePhoneNumber(content.phoneNumber) &&
                    content.phoneNumber !== ""
                      ? "border-red-500"
                      : "border-black"
                  } `}
                  type="number"
                  onKeyDown={(e) =>
                    ["e", "E", "-"].includes(e.key) && e.preventDefault()
                  }
                  placeholder="Phone Number"
                  onChange={(e) =>
                    setContent({ ...content, phoneNumber: e.target.value })
                  }
                />

                <div className="text-xs pl-2">
                  We will get in contact with you on this number.
                </div>
              </div>
              {params.type === "general" && (
                <div className="w-full my-2">
                  <div className=" ">Message</div>
                  <textarea
                    rows={3}
                    className={`text-black outline-none border-2 w-full  rounded-md px-2 py-1 ${
                      content.Message.length < 4 &&
                      content.Message != "" &&
                      content.type === "general"
                        ? "border-red-500"
                        : "border-black"
                    } `}
                    type="number"
                    placeholder="Enter your mesage here"
                    onChange={(e) =>
                      setContent({ ...content, Message: e.target.value })
                    }
                  />
                </div>
              )}
              <div
                onClick={onSubmit}
                className=" hover:bg-gray-600 cursor-pointer w-full text-center rounded-md mx-auto my-2 bg-black text-white px-3 py-2  "
              >
                Submit
              </div>
              {sent && (
                <div className="bg-green-400 rounded-md px-2 py-1 text-sm text-center mx-auto">
                  Submitted Successfully
                </div>
              )}
              {wrongInputs && (
                <div className="text-red-400 font-bold rounded-md px-2 py-1 text-sm ">
                  Invalid Inputs
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
