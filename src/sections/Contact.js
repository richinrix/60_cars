import React from "react";
// icons
import { AiOutlinePhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { CgInstagram } from "react-icons/cg";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
const socialMedia = [
  {
    name: "Whatsapp",
    icon: <RiWhatsappFill />,
    link: "https://wa.me/918722620158",
    color: "bg-green-400",
  },
  {
    name: "Instagram",
    icon: <CgInstagram />,
    link: "https://www.instagram.com/60_cars/",
    color: "bg-pink-400",
  },
  {
    name: "Twitter",
    icon: <BsTwitter />,
    link: "https://twitter.com/60_cars",
    color: "bg-blue-400",
  },
];
const Contact = (props) => {
  return (
    <>
      <div
        // ref={ref}
        id="contact"
        className="lg:px-20 mb-5  mx-auto lg:py-20 py-7   flex flex-col lg:flex-row px-3 lg:items-center   justify-between text-white  "
      >
        <div className="flex flex-col w-full lg:w-5/12 justify-center">
          <div className="  font-bold text-xl lg:text-5xl font-leagueSpartan">
            Get in touch with us
          </div>
          <a
            // href="https://maps.google.com/maps?q=13.1042887%2C77.6025789&z=17&hl=en"
            target="_blank"
            noopener={true}
            rel="noopener noreferrer"
            className="text-sm my-2 "
          >
            <ImLocation className="text-brandRed inline-block  mr-1" />
            YESH 60 CARS Private Limited, 22 Bagaluru Cross, Near BSF, Uday
            Nagar, Yelahanka, Bangalore (N), Karnataka - 560064, India
          </a>
          <div className="flex items-center my-2  w-full">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl   rounded-md hover:text-white hover:bg-gray-800 hover:border-white border-gray-800 border-2 mr-8  text-gray-800 p-1 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div
          className="lg:block hidden h-64 bg-white "
          style={{ width: "1px" }}
        ></div>
        <div className="w-full lg:w-5/12 flex flex-col ">
          <div className="font-bold text-base">For Reservations / Business</div>
          <div className="text-sm pl-2">
            <div className="flex items-center my-2  ">
              <AiOutlinePhone className="text-xl mx-2" />
              Phone:
              <a href="tel:8722620158" className="ml-2 text-xs lg:text-sm">
                {" "}
                +91-(0)8722620158
              </a>
              <a href="tel:91481 22012" className="ml-2 text-xs lg:text-sm">
                / +91 9148122012
              </a>
            </div>
            <div className="flex items-center my-2 ">
              <MdMail className="text-xl mx-2" />
              Email:
              <a href="mailto:support@60cars.com " className="ml-2">
                business@60cars.com
              </a>
            </div>
          </div>
          <div className="font-bold text-base mt-4   ">For Support </div>
          <div className="text-sm pl-2">
            <div className="flex items-center my-2  ">
              <AiOutlinePhone className="text-xl mx-2" />
              Phone:
              <a href="tel:8722620158" className="ml-2 text-xs lg:text-sm">
                {" "}
                +91-(0)8722620158
              </a>
              <a href="tel:91481 22012" className="ml-2 text-xs lg:text-sm">
                / +91 9148122012
              </a>
            </div>
            <div className="flex items-center my-2 ">
              <MdMail className="text-xl mx-2" />
              Email:
              <a href="mailto:support@60cars.com " className="ml-2">
                support@60cars.com
              </a>
            </div>
          </div>
          <div className="block lg:hidden text-sm text-gray-500 text-center py-6">
            © {new Date().getFullYear()} 60 Cars. All rights reserved.
          </div>
        </div>
      </div>
      {/* copyrights */}
      <div className="hidden lg:block text-sm text-gray-500 text-center py-6">
        © {new Date().getFullYear()} 60 Cars. All rights reserved.
      </div>
    </>
  );
};

export default Contact;
