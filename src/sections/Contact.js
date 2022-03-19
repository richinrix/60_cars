import React from "react";
import { useVisibility } from "reactjs-visibility";
// icons
import { AiOutlinePhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { CgInstagram, CgFacebook } from "react-icons/cg";
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
  const options = {
    rootMargin: "-100px",
  };

  const handleChangeVisibility = (visible) => {
    if (visible) {
      props.setActiveSection("contact us");
      props.check("contact");
    }
  };
  const { ref, visible } = useVisibility({
    onChangeVisibility: handleChangeVisibility,
    options,
  });
  return (
    <>
      <div
        ref={ref}
        id="contact"
        className="lg:px-20 mb-5  mx-auto lg:py-20 py-7   flex flex-col lg:flex-row px-3 lg:items-center   justify-between text-white  "
      >
        <div class="flex flex-col w-full lg:w-5/12 justify-center">
          <div class="  font-bold text-xl lg:text-5xl font-leagueSpartan">
            {/* <lord-icon
              src="https://cdn.lordicon.com/zpxybbhl.json"
              trigger="loop"
              style="width:250px;height:250px"
            ></lord-icon> */}
            Get in touch with us
          </div>
          <a
            // href="https://maps.google.com/maps?q=13.1042887%2C77.6025789&z=17&hl=en"
            target="_blank"
            noopener={true}
            rel="noopener noreferrer"
            class="text-sm my-2 "
          >
            <ImLocation className="text-brandRed inline-block  mr-1" />
            YESH 60 CARS Private Limited, 22 Bagaluru Cross, Near BSF, Uday
            Nagar, Yelahanka, Bangalore (N), Karnataka - 560064, India
          </a>
          <div class="flex items-center my-2  w-full">
            {socialMedia.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                class={`text-3xl   rounded-md hover:text-white hover:bg-black hover:border-white border-black border-2 mr-8  text-black p-1 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div
          class="lg:block hidden h-64 bg-white "
          style={{ width: "1px" }}
        ></div>
        <div class="w-full lg:w-5/12 flex flex-col ">
          <div class="font-bold text-base">For Reservations / Business</div>
          <div class="text-sm pl-2">
            <div class="flex items-center my-2  ">
              <AiOutlinePhone className="text-xl mx-2" />
              Phone:
              <a href="tel:8722620158" className="ml-2">
                {" "}
                +91-(0)8722620158
              </a>
            </div>
            <div class="flex items-center my-2 ">
              <MdMail className="text-xl mx-2" />
              Email:
              <a href="mailto:support@60cars.com " class="ml-2">
                business@60cars.com
              </a>
            </div>
          </div>
          <div class="font-bold text-base mt-4   ">For Support </div>
          <div class="text-sm pl-2">
            <div class="flex items-center my-2  ">
              <AiOutlinePhone className="text-xl mx-2" />
              Phone:
              <a href="tel:8722620158" className="ml-2">
                {" "}
                +91-(0)8722620158
              </a>
            </div>
            <div class="flex items-center my-2 ">
              <MdMail className="text-xl mx-2" />
              Email:
              <a href="mailto:support@60cars.com " class="ml-2">
                support@60cars.com
              </a>
            </div>
          </div>
          <div class="block lg:hidden text-sm text-gray-500 text-center py-6">
            © {new Date().getFullYear()} 60 Cars. All rights reserved.
          </div>
        </div>
      </div>
      {/* copyrights */}
      <div class="hidden lg:block text-sm text-gray-500 text-center py-6">
        © {new Date().getFullYear()} 60 Cars. All rights reserved.
      </div>
    </>
  );
};

export default Contact;
