import "./App.css";
import React from "react";
import { Nav, HeaderAnnouncement, Brands } from "./components/";
import {
  LandingSection,
  OurFleet,
  Features,
  Services,
  Contact,
} from "./sections/";
function App() {
  return (
    <div className=" overflow-x-clip ">
      <div class="py-4 font-extrabold bg-white text-4xl w-screen flex lg:hidden justify-center items-center ">
        60 Cars
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <HeaderAnnouncement />
        <div class=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="home" />
        </div>
      </div>
      <div class="   lg:px-0 mx-auto ">
        <LandingSection />
        <OurFleet />
        <Brands />
        <Features />
        <Services />
        <div class="bg-black">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
