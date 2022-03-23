import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

// json importing
import clients from "../JSON/clients.json";

const Clients = (props) => {
  const isPhone = window.innerWidth < 768;

  return (
    <div className=" px-3 lg:px-20 my-10 ">
      <div className="text-4xl lg:text-7xl font-leagueSpartan font-bold">
        Clients we are proud to serve
      </div>
      <Swiper
        slidesPerView={isPhone ? 2 : 4}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="h-20vh lg:h-30vh flex justify-center items-center">
              <img
                width={isPhone ? "100px" : "200px"}
                src={client.logo}
                alt={client.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
