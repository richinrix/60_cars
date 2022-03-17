import "./App.css";
import React, { useState } from "react";
import { Nav, HeaderAnnouncement, Brands, Header } from "./components/";
import {
  LandingSection,
  OurFleet,
  Features,
  Services,
  Contact,
  Clients,
} from "./sections/";
function App() {
  const [activeSection, setActiveSection] = useState("home");
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
          <Nav current={activeSection} />
        </div>
      </div>
    </>
  );
  return (
    <div className=" overflow-x-clip ">
      {Header()}
      <div class="   lg:px-0 mx-auto ">
        <LandingSection setActiveSection={setActiveSection} />
        <OurFleet setActiveSection={setActiveSection} />
        <Brands setActiveSection={setActiveSection} />
        <Features setActiveSection={setActiveSection} />
        <Services setActiveSection={setActiveSection} />
        <Clients setActiveSection={setActiveSection} />
        <div class="bg-black">
          <Contact setActiveSection={setActiveSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
