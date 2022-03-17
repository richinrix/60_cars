import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
// json importing
import clients from "../JSON/clients.json";
// const clients = [
//   {
//     name: "CAT",
//     logo: "images/clientsLogos/caterpillar.png",
//   },
//   {
//     name: "Reliance Industry",
//     logo: "images/clientsLogos/reliance-industry.jpg",
//   },
//   {
//     name: "viacom18",
//     logo: "images/clientsLogos/viacom18.png",
//   },

//   {
//     name: "Reliance Fresh",
//     logo: "images/clientsLogos/reliance-fresh.jpg",
//   },
//   {
//     name: "essel group",
//     logo: "images/clientsLogos/essel-group.jpg",
//   },

//   {
//     name: "Make My Trip",
//     logo: "images/clientsLogos/makemytripBlue.png",
//   },
//   {
//     name: "CAT",
//     logo: "images/clientsLogos/caterpillar.png",
//   },
//   {
//     name: "Reliance Industry",
//     logo: "images/clientsLogos/reliance-industry.jpg",
//   },
//   {
//     name: "viacom18",
//     logo: "images/clientsLogos/viacom18.png",
//   },

//   {
//     name: "Reliance Fresh",
//     logo: "images/clientsLogos/reliance-fresh.jpg",
//   },
//   {
//     name: "essel group",
//     logo: "images/clientsLogos/essel-group.jpg",
//   },

//   {
//     name: "Make My Trip",
//     logo: "images/clientsLogos/makemytripBlue.png",
//   },
//   {
//     name: "CAT",
//     logo: "images/clientsLogos/caterpillar.png",
//   },
//   {
//     name: "Reliance Industry",
//     logo: "images/clientsLogos/reliance-industry.jpg",
//   },
//   {
//     name: "viacom18",
//     logo: "images/clientsLogos/viacom18.png",
//   },

//   {
//     name: "Reliance Fresh",
//     logo: "images/clientsLogos/reliance-fresh.jpg",
//   },
//   {
//     name: "essel group",
//     logo: "images/clientsLogos/essel-group.jpg",
//   },

//   {
//     name: "Make My Trip",
//     logo: "images/clientsLogos/makemytripBlue.png",
//   },
// ];

const Clients = () => {
  const isPhone = window.innerWidth < 768;
  return (
    <div className=" px-3 lg:px-20 my-10 ">
      <div class="text-4xl lg:text-7xl font-leagueSpartan font-bold">
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
        {clients.map((client) => (
          <SwiperSlide>
            <div class="h-20vh lg:h-30vh flex justify-center items-center">
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
