import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="lg:container mx-auto lg:py-20  flex-col flex justify-center text-white px-3 py-5"
      >
        <div class="text-xl lg:text-7xl font-leagueSpartan">Get In Touch </div>
        <div class="flex flex-col lg:flex-row justify-between w-full">
          <div class="w-full lg:w-1/2 flex flex-col">
            {/* <div class=" text-bold text-xl">Find us here </div> */}
            <div class="text-sm  my-4 lg:my-2">
              YESH 60 CARS Private Limited, 22 BagaluruCross, Near Bsf, Uday
              Nagar, Yelahanka, Bangalore (N), Karnataka - 560064, India
            </div>
          </div>
          <div class="w-full lg:w-1/2  flex  justify-end ">
            <div class="pr-2 lg:pr-0 flex flex-col lg:mx-8 ">
              <div class="flex text-bold text-sm lg:text-xl mx mb- lg:mb-0">
                For Reservation/Business
              </div>
              <div class="flex  text-xs lg:text-sm flex-col my-2">
                <div class=" ">Phone: +91-(0)8722620158</div>
                <a href="mailto:business@60cars.com" class="">
                  Email: business@60cars.com
                </a>
              </div>
            </div>
            {/* support */}
            <div class="pl-2 lg:pl-0 flex flex-col lg:ml-8 ">
              <div class="text-bold text-sm lg:text-xl mb-6 lg:mb-0">
                For Support
              </div>
              <div class="flex text-sm flex-col my-2 mx">
                <div class=" text-xs lg:text-sm">
                  Phone: <a href="tel:872260158">+91-(0)8722620158</a>
                </div>
                <div class="text-xs lg:text-sm">
                  Email:{" "}
                  <a href="mailto:support@60cars.com " class="text-sm">
                    support@60cars.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyrights */}
      <div class="text-sm text-gray-500 text-center py-6">
        © {new Date().getFullYear()} 60 Cars. All rights reserved.
      </div>
    </>
  );
};

export default Contact;
